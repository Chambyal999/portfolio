  window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 875) {
    navbar.classList.add('scrolled-navbar');
  } else {
    navbar.classList.remove('scrolled-navbar');
  }
});


// responsive portfolio start <script>
  window.onload = () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');

        items.forEach(item => {
          const category = item.getAttribute('data-category');

          if (target === 'all' || category === target) {
            item.classList.remove('d-none');
          } else {
            item.classList.add('d-none');
          }
        });
      });
    });
  };

// responsive portfolio end 
