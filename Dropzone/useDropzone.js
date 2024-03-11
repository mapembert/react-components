// useDropzone.js
import { useState, useCallback } from 'react';

const useDropzone = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelected = useCallback((file) => {
    setSelectedFile(file);
  }, []);

  const resetDropzone = useCallback(() => {
    setSelectedFile(null);
  }, []);

  return { selectedFile, handleFileSelected, resetDropzone };
};

export default useDropzone;
