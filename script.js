const canvas = document.getElementById('notebookCanvas');
const ctx = canvas.getContext('2d');

const notebookImage = new Image();
notebookImage.src = 'notebook.jpg';
notebookImage.onload = () => {
    ctx.drawImage(notebookImage, 0, 0, canvas.width, canvas.height);
};

function writeText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(notebookImage, 0, 0, canvas.width, canvas.height);

    const text = document.getElementById('userText').value;
    ctx.font = '22px "Indie Flower"';
    ctx.fillStyle = '#000000';
    ctx.textBaseline = 'top';

    const lines = text.split('\n');
    let y = 50; // بداية النص من الأعلى
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], 50, y);
        y += 30; // المسافة بين الأسطر
    }
}
