import { translateInstructionToMIPS } from './Converter';

let isHighlight = false;
export const setIsHighlight = (value) => {
  isHighlight = value;
};

export const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

export const handleDrop = (e, setIsHighlight, setMipsInput, setHexInput) => {
  preventDefaults(e);
  setIsHighlight(false);

  const files = e.dataTransfer.files;
  if (files.length === 0) {
    console.error('No files dropped');
    return;
  }

  console.log('File dropped:', files[0]);

  const reader = new FileReader();
  reader.onload = (event) => {
    const text = event.target.result;
    console.log('File content:', text);

    const lines = text.split('\n');
    if (lines.length < 2) {
      console.error('File does not contain enough lines');
      return;
    }

    const instructionsArray = lines[1].trim().split(/\s+/);
    let translatedInstructions = '';
    let originalInstructions = '';

    instructionsArray.forEach(instruction => {
      const translated = translateInstructionToMIPS(instruction.trim());
      translatedInstructions += `${translated}\n`;
      originalInstructions += `${instruction.trim()}\n`;
    });

    setMipsInput(translatedInstructions.trim());
    setHexInput(originalInstructions.trim());
  };

  reader.onerror = (error) => {
    console.error('Error reading file:', error);
  };

  reader.readAsText(files[0]);
};