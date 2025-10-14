import { useState, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../assets/SaiKaranam_FullStackDeveloper_Resume.pdf"; // Verify this path is correct
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Resume.css";

// Configure PDF.js worker (important!)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(false);
  };

  const onDocumentLoadError = (error) => {
    console.error("PDF load error:", error);
    setLoading(false);
    setError(true);
  };

  const scale = width > 768 ? 1.5 : width > 480 ? 1 : 0.6;

  return (
    <div className="resume-container">
      <Particle />
      <div className="resume-section">
        <button
          className="download-btn"
          onClick={() => window.open(pdf, "_blank")}
        >
          <AiOutlineDownload />
          Download CV
        </button>

        <div className="pdf-viewer">
          {error ? (
            <div className="error-message">
              <p>Failed to load resume PDF.</p>
              <p>Please try downloading it instead.</p>
            </div>
          ) : loading ? (
            <div className="loading-message">Loading resume...</div>
          ) : (
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<div className="loading-message">Loading...</div>}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={scale}
                  renderTextLayer={false}
                  className="pdf-page"
                />
              ))}
            </Document>
          )}
        </div>

        <button
          className="download-btn"
          onClick={() => window.open(pdf, "_blank")}
        >
          <AiOutlineDownload />
          Download CV
        </button>
      </div>
    </div>
  );
}

export default ResumeNew;