// Add event listener for the "Desktop" button
document.getElementById('desktopBtn').addEventListener('click', function() {
  document.getElementById('desktopVideo').style.display = 'block';
  document.getElementById('mobileVideo').style.display = 'none';
  this.classList.add('active');
  document.getElementById('mobileBtn').classList.remove('active');
});

// Add event listener for the "Mobile" button
document.getElementById('mobileBtn').addEventListener('click', function() {
  document.getElementById('mobileVideo').style.display = 'block';
  document.getElementById('desktopVideo').style.display = 'none';
  this.classList.add('active');
  document.getElementById('desktopBtn').classList.remove('active');
});
