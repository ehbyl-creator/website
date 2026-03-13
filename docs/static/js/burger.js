document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');
    const dropdownBtn = document.querySelector('.mobile-nav .dropdown-btn');
    const dropdown = document.querySelector('.mobile-nav .dropdown');

    burger.addEventListener('click', function() {
        mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });

    dropdownBtn.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('open');
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const drawer = document.getElementById('mobile-drawer');
    const closeBtn = document.querySelector('.close-drawer');
    const dropdownBtn = document.getElementById('drawer-dropdown-btn');
    const dropdownContent = document.getElementById('drawer-dropdown-content');

    burger.addEventListener('click', function() {
        drawer.classList.add('open');
    });

    closeBtn.addEventListener('click', function() {
        drawer.classList.remove('open');
        dropdownContent.style.display = 'none'; // Hide dropdown when closing drawer
    });

    dropdownBtn.addEventListener('click', function() {
        if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
            dropdownContent.style.display = 'block';
        } else {
            dropdownContent.style.display = 'none';
        }
    });
});