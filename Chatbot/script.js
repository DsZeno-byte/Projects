document.addEventListener("DOMContentLoaded", function() {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const pdfPreview = document.getElementById('pdf-preview');
    const questionInput = document.getElementById('question-input');
    const submitBtn = document.getElementById('submit-btn');
    const answerOutput = document.getElementById('answer-output');
  
    // Function to handle file drop
    dropZone.addEventListener('dragover', function(e) {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    });
  
    dropZone.addEventListener('dragleave', function() {
      dropZone.classList.remove('drag-over');
    });
  
    dropZone.addEventListener('drop', function(e) {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      const file = e.dataTransfer.files[0];
      handleFile(file);
    });
  
    // Function to handle file input change
    fileInput.addEventListener('change', function() {
      const file = this.files[0];
      handleFile(file);
    });
  
    // Function to handle PDF file
    function handleFile(file) {
      if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file.');
        return;
      }
  
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const pdfData = e.target.result;
        const pdf = new Uint8Array(pdfData);
        const pdfUrl = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
        pdfPreview.innerHTML = `<embed src="${pdfUrl}" width="100%" height="100%">`;
      };
  
      reader.readAsArrayBuffer(file);
    }
  
    // Function to handle question submission
    submitBtn.addEventListener('click', function() {
      const question = questionInput.value.trim();
      if (question === '') {
        alert('Please enter a question.');
        return;
      }
  
      // Here you would handle sending the question to your AI-powered chatbot
      // For demo purposes, let's just display a placeholder answer
      const answer = generatePlaceholderAnswer();
      displayAnswer(answer);
    });
  
    // Function to display answer
    function displayAnswer(answer) {
      answerOutput.innerHTML = `<p>${answer}</p>`;
    }
  
    // Function to generate a placeholder answer
    function generatePlaceholderAnswer() {
      return 'Placeholder answer for the demo.';
    }
  });
  