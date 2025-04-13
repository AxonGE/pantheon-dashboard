
document.querySelectorAll('.ai-button').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.ai === 'ScriptorAI') {
      document.getElementById('scriptor-modal').style.display = 'block';
    } else {
      alert(btn.dataset.ai + ' interface coming soon.');
    }
  });
});

function closeModal() {
  document.getElementById('scriptor-modal').style.display = 'none';
}

function copyDraft() {
  const text = document.getElementById('chapter-text').value;
  navigator.clipboard.writeText(text).then(() => {
    alert("Draft copied to clipboard.");
  });
}
