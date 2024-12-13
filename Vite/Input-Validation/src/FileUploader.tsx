import React, { useState, ChangeEvent } from "react";

type FileTypes = {
  pdf: boolean;
  img: boolean;
  docs: boolean;
  gif: boolean;
};

const FileUploader: React.FC = () => {
  const [allowedFileTypes, setAllowedFileTypes] = useState<FileTypes>({
    pdf: false,
    img: false,
    docs: false,
    gif: false,
  });

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAllowedFileTypes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const getAcceptedFileTypes = (): string=> {
    const types: string[] = [];
    if (allowedFileTypes.pdf) types.push(".pdf");
    if (allowedFileTypes.img) types.push(".jpg", ".jpeg", ".png");
    if (allowedFileTypes.docs) types.push(".doc", ".docx", ".txt");
    if (allowedFileTypes.gif) types.push(".gif");
    return types.join(",");
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files) {
      console.log("Uploaded files:", Array.from(files));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>File Uploader</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="pdf"
            checked={allowedFileTypes.pdf}
            onChange={handleCheckboxChange}
          />
          PDF
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            name="img"
            checked={allowedFileTypes.img}
            onChange={handleCheckboxChange}
          />
          Images (JPG, PNG)
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            name="docs"
            checked={allowedFileTypes.docs}
            onChange={handleCheckboxChange}
          />
          Documents (DOC, DOCX, TXT)
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            name="gif"
            checked={allowedFileTypes.gif}
            onChange={handleCheckboxChange}
          />
          GIF
        </label>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="file"
          multiple
          accept={getAcceptedFileTypes()}
          onChange={handleFileUpload}
          disabled={!Object.values(allowedFileTypes).some((value) => value)}
        />
      </div>
    </div>
  );
};

export default FileUploader;
