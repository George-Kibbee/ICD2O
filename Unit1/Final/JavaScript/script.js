document.getElementById('clearbutton').addEventListener('click', () => {
  document.getElementById('userinput').value = '';
  document.getElementById("userinput").focus();
});
const button = document.getElementById('searchbutton');
const input = document.getElementById('userinput');

button.addEventListener('click', function () {
  const q = (input.value || '').trim();
  const url = 'https://www.google.com/search?q=' + encodeURIComponent(q);
  window.open(url, '_blank');
});