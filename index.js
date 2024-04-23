const noteContent = document.getElementById('note-content');

// Save note to IndexedDB
noteContent.addEventListener('blur', () => {
  const note = noteContent.value;
  localStorage.setItem('note', note);
});

// Retrieve note from IndexedDB
window.addEventListener('load', () => {
  const note = localStorage.getItem('note');
  if (note) {
    noteContent.value = note;
  }
});

// Install service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
