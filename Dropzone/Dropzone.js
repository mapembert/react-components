// Dropzone.js
import React from 'react';
import { useDropzone } from './useDropzone';
import { Box } from '@mui/material';

const Dropzone = () => {
  const { selectedFile, handleFileSelected, resetDropzone } = useDropzone();

  return (
    <Box
      onClick={resetDropzone}
      sx={{
        border: '2px dashed #3f51b5',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={(e) => handleFileSelected(e.target.files[0])}
        style={{ display: 'none' }}
      />
      <p>Click to select or drag & drop a file here</p>
      {selectedFile && (
        <div>
          <h3>Selected File:</h3>
          <p>{selectedFile.name}</p>
        </div>
      )}
    </Box>
  );
};

export default Dropzone;
