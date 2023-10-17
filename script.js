function onInvalid (e) {
    e.target.classList.add('invalid');
  }
  
  const form = document.querySelector('form');
  
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('invalid', onInvalid);
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const valid = form.reportValidity();
  })