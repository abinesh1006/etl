import React from 'react';

const FileUploadSection = ({ source, onConfigChange, onInfer }) => {
  return (
    <div className="file-upload-section">
      <h2>Source {source} Configuration</h2>
      <input
        type="file"
        onChange={(e) => onConfigChange(source, 'file', e.target.files[0])}
      />
      <input
        type="text"
        placeholder="Data starts row"
        onChange={(e) => onConfigChange(source, 'dataStartRow', e.target.value)}
      />
      <input
        type="text"
        placeholder="Sheet name"
        onChange={(e) => onConfigChange(source, 'sheetName', e.target.value)}
      />
      <input
        type="number"
        placeholder="Sheet number"
        onChange={(e) => onConfigChange(source, 'sheetNumber', e.target.value)}
      />
      <button onClick={() => onInfer(source)}>Infer</button>
    </div>
  );
};

export default FileUploadSection;
