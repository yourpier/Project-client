// Tab switching for login/register
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    if (tab === 'login') {
      document.getElementById('loginForm')?.classList.add('active');
    } else if (tab === 'register') {
      document.getElementById('registerForm')?.classList.add('active');
    }
  });
});

function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const icon = input.nextElementSibling.querySelector('i');
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

function showForgotPassword() {
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('forgotForm')?.classList.add('active');
}

function showLogin() {
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.tab-btn[data-tab="login"]')?.classList.add('active');
  document.getElementById('loginForm')?.classList.add('active');
}

// Login form
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  // Demo: any credentials work
  window.location.href = 'dashboard.html';
});

// Register form
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const pass = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirmPassword').value;
  if (pass !== confirm) {
    alert('Passwords do not match!');
    return;
  }
  alert('Registration successful! Please check your email for verification. (Demo)');
  showLogin();
});

// Forgot password
document.getElementById('forgotForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Password reset link has been sent to your email. (Demo)');
  showLogin();
});

// Sidebar toggle (mobile)
function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
}

// Modal helpers
function openModal(id) {
  document.getElementById(id)?.classList.add('active');
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('active');
}

function saveInhabitant() {
  alert('Inhabitant profile saved successfully! (Demo)');
  closeModal('addInhabitantModal');
  closeModal('manualEncodeModal');
}

function saveClearance() {
  alert('Clearance record saved successfully! (Demo)');
  closeModal('addClearanceModal');
}

function viewClearance() {
  openModal('viewClearanceModal');
}

function releaseClearance() {
  alert('Barangay Clearance has been released! (Demo)');
  closeModal('viewClearanceModal');
}

function declineClearance() {
  if (confirm('Are you sure you want to decline this clearance?')) {
    alert('Clearance declined. (Demo)');
    closeModal('viewClearanceModal');
  }
}

function logout() {
  // Just redirect
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
});
