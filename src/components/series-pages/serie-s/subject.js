import React from 'react';

const Subject = ({ pdfURL }) => {
  return (
    <div>
      <iframe src={pdfURL} title="PDF Viewer" width="100%" height="500px"></iframe>
    </div>
  );
}

export default Subject;
