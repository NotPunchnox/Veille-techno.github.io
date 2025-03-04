document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('toggleButton');
    const content = document.querySelector('.content');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        
        // Close sidebar when clicking outside on mobile
        if (window.innerWidth <= 768) {
            content.addEventListener('click', closeSidebarOnOutsideClick);
        }
    });

    function closeSidebarOnOutsideClick(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.remove('collapsed');
            content.removeEventListener('click', closeSidebarOnOutsideClick);
        }
    }

    // Adjust sidebar on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('collapsed');
        }
    });
});