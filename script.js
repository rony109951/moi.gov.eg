function writeText() {
  let text = document.getElementById( userText ).value;
  let notebook = document.getElementById( notebookText );
  
  // إظهار النص داخل الكراسة مع تنسيق الأسطر
  notebook.innerText = text;
  
  // التمرير إلى أسفل الصفحة لعرض الكراسة
  window.scrollTo(0, document.body.scrollHeight);
}
