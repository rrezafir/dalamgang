// Ambil elemen navbar
const navbar = document.querySelector(".navbar");

// Tambahkan event listener saat halaman di-scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll"); // Tambahkan class saat di-scroll
    } else {
        navbar.classList.remove("navbar-scroll"); // Hapus class saat di atas
    }
});

//
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Sesuaikan offset dengan tinggi navbar
                behavior: 'smooth'
            });
        }
    });
});