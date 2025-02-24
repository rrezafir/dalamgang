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

// Slider Image Menu Kopi

// Slide Gambar Artikel Kita //
document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk membuat slider
    function createSlider(slideClass) {
        const slides = document.querySelectorAll(`.${slideClass}`);
        let currentIndex = 0;
        const totalSlides = slides.length;

        function showNextSlide() {
            // Sembunyikan gambar saat ini
            slides[currentIndex].classList.remove("opacity-100");
            slides[currentIndex].classList.add("opacity-0");

            // Pindah ke gambar berikutnya
            currentIndex = (currentIndex + 1) % totalSlides;

            // Tampilkan gambar berikutnya
            slides[currentIndex].classList.remove("opacity-0");
            slides[currentIndex].classList.add("opacity-100");
        }

        // Mulai interval untuk slider ini
        setInterval(showNextSlide, 3000);
    }

    // Inisialisasi kedua slider
    createSlider('gambar-slide-1');
    createSlider('gambar-slide-2');
});
