import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../assets/files/CV2.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const CV = () => {
  const [loadError, setLoadError] = useState(false);

  const onLoadError = () => {
    setLoadError(true);
  };

  return (
    <div className="flex flex-col items-center w-full text-white">
      {loadError && <div></div>}
      <Document
        file={pdf}
        onLoadError={onLoadError}
        className={"m-auto text-4xl"}
      >
        <Page pageNumber={1} renderTextLayer={false} className={"mb-3"} />
        <Page pageNumber={2} renderTextLayer={false} />
      </Document>
    </div>
  );
};

export default CV;
