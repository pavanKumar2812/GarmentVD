// Overlay functionality
function hideAllOverlays() {
  const overlays = document.querySelectorAll('.overlay-section');
  overlays.forEach(overlay => overlay.classList.remove('active'));
}

function showContactOverlay() {
  hideAllOverlays();
  const overlay = document.getElementById('contactOverlay');
  overlay.classList.add('active');
}

function showAboutOverlay() {
  hideAllOverlays();
  const overlay = document.getElementById('aboutOverlay');
  overlay.classList.add('active');
}

function hideOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  overlay.classList.remove('active');
}

// Close overlay when clicking outside content
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('overlay-section')) {
    hideOverlay(e.target.id);
  }
});

// Close overlay with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    hideAllOverlays();
  }
});

// Request Quote functionality
function requestQuote() {
  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'quote-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Request a Quote</h3>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <form class="quote-form" onsubmit="submitQuote(event)">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required>
        </div>
        <div class="form-group">
          <label for="product">Product Type</label>
          <select id="product" name="product" required>
            <option value="">Select Product Type</option>
            <option value="school-uniforms">School Uniforms</option>
            <option value="mens-pants">Men's Pants</option>
            <option value="boys-pants">Boys' Pants</option>
            <option value="half-pants">Half Pants</option>
            <option value="custom-apparel">Custom Apparel</option>
          </select>
        </div>
        <div class="form-group">
          <label for="quantity">Estimated Quantity</label>
          <input type="number" id="quantity" name="quantity" min="1" required>
        </div>
        <div class="form-group">
          <label for="message">Additional Requirements</label>
          <textarea id="message" name="message" rows="4" placeholder="Please describe your specific requirements..."></textarea>
        </div>
        <button type="submit" class="submit-btn">Submit Quote Request</button>
      </form>
    </div>
  `;

  // Add modal styles
  const modalStyles = `
    <style>
      .quote-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
        animation: fadeIn 0.3s ease;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .modal-content {
        background: white;
        border-radius: 12px;
        padding: 0;
        max-width: 500px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
      }

      @keyframes slideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 30px;
        border-bottom: 1px solid #eee;
        background: #f8f9fa;
        border-radius: 12px 12px 0 0;
      }

      .modal-header h3 {
        margin: 0;
        color: #333;
        font-family: 'Playfair Display', serif;
        font-size: 24px;
      }

      .close-btn {
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: #666;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.2s ease;
      }

      .close-btn:hover {
        background: #e9ecef;
        color: #333;
      }

      .quote-form {
        padding: 30px;
      }

      .form-group {
        margin-bottom: 20px;
      }

      .form-group label {
        display: block;
        margin-bottom: 8px;
        color: #333;
        font-weight: 500;
        font-size: 14px;
      }

      .form-group input,
      .form-group select,
      .form-group textarea {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        font-size: 14px;
        transition: border-color 0.3s ease;
        font-family: 'Inter', sans-serif;
      }

      .form-group input:focus,
      .form-group select:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: #b8a082;
        box-shadow: 0 0 0 3px rgba(184, 160, 130, 0.1);
      }

      .form-group textarea {
        resize: vertical;
        min-height: 100px;
      }

      .submit-btn {
        width: 100%;
        background: linear-gradient(135deg, #b8a082 0%, #a08968 100%);
        color: white;
        border: none;
        padding: 16px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Inter', sans-serif;
      }

      .submit-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(184, 160, 130, 0.3);
      }

      .submit-btn:active {
        transform: translateY(0);
      }

      @media (max-width: 768px) {
        .modal-content {
          width: 95%;
          margin: 20px;
        }
        
        .modal-header {
          padding: 20px 25px;
        }
        
        .quote-form {
          padding: 25px;
        }
        
        .modal-header h3 {
          font-size: 20px;
        }
      }
    </style>
  `;

  document.head.insertAdjacentHTML('beforeend', modalStyles);
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Focus first input
  setTimeout(() => {
    const firstInput = modal.querySelector('input');
    if (firstInput) firstInput.focus();
  }, 100);
}

// Close modal function
function closeModal() {
  const modal = document.querySelector('.quote-modal');
  if (modal) {
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = 'auto';
    }, 300);
  }
}

// Submit quote function
function submitQuote(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Show success message
  const modal = document.querySelector('.modal-content');
  modal.innerHTML = `
    <div class="success-message">
      <div class="success-icon">✓</div>
      <h3>Quote Request Submitted!</h3>
      <p>Thank you for your interest in Venkey Dresses. We have received your quote request and will get back to you within 24 hours.</p>
      <button class="close-success-btn" onclick="closeModal()">Close</button>
    </div>
  `;

  // Add success message styles
  const successStyles = `
    <style>
      .success-message {
        text-align: center;
        padding: 50px 30px;
      }

      .success-icon {
        width: 80px;
        height: 80px;
        background: #28a745;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        margin: 0 auto 25px;
        animation: scaleIn 0.5s ease;
      }

      @keyframes scaleIn {
        from { transform: scale(0); }
        to { transform: scale(1); }
      }

      .success-message h3 {
        color: #333;
        margin-bottom: 15px;
        font-family: 'Playfair Display', serif;
        font-size: 24px;
      }

      .success-message p {
        color: #666;
        line-height: 1.6;
        margin-bottom: 30px;
        font-size: 16px;
      }

      .close-success-btn {
        background: linear-gradient(135deg, #b8a082 0%, #a08968 100%);
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 25px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Inter', sans-serif;
      }

      .close-success-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(184, 160, 130, 0.3);
      }
    </style>
  `;

  document.head.insertAdjacentHTML('beforeend', successStyles);

  // Auto close after 5 seconds
  setTimeout(() => {
    closeModal();
  }, 5000);
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.querySelector('.quote-modal');
  if (modal && event.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
      
      // You can add actual navigation logic here
      console.log('Navigation clicked:', this.textContent);
    });
  });
});

// Add fade-in animation on page load
window.addEventListener('load', function() {
  const leftPanel = document.querySelector('.left-panel');
  const rightPanel = document.querySelector('.right-panel');
  
  leftPanel.style.opacity = '0';
  rightPanel.style.opacity = '0';
  
  setTimeout(() => {
    leftPanel.style.transition = 'opacity 0.8s ease';
    rightPanel.style.transition = 'opacity 0.8s ease 0.2s';
    leftPanel.style.opacity = '1';
    rightPanel.style.opacity = '1';
  }, 100);
});
