document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('journal-form');
  const entryInput = document.getElementById('entry');
  const entriesSection = document.getElementById('entries');

  function getEntries() {
    return JSON.parse(localStorage.getItem('journalEntries') || '[]');
  }

  function saveEntries(entries) {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }

  function renderEntries() {
    const entries = getEntries();
    entriesSection.innerHTML = '';
    entries.forEach((entry, idx) => {
      const entryDiv = document.createElement('div');
      entryDiv.className = 'entry';
      entryDiv.innerHTML = `
        <span class="entry-date">${entry.date}</span>
        <div>${entry.text.replace(/\n/g, '<br>')}</div>
        <button class="delete-btn" title="Delete entry" data-idx="${idx}">&times;</button>
      `;
      entriesSection.appendChild(entryDiv);
    });
  }

  entriesSection.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      const idx = e.target.getAttribute('data-idx');
      const entries = getEntries();
      entries.splice(idx, 1);
      saveEntries(entries);
      renderEntries();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = entryInput.value.trim();
    if (!text) return;
    const entries = getEntries();
    entries.push({
      text,
      date: new Date().toLocaleString()
    });
    saveEntries(entries);
    entryInput.value = '';
    renderEntries();
  });

  renderEntries();
}); 