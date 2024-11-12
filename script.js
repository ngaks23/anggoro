// Seleksi container untuk menampung hati
const heartsContainer = document.getElementById("hearts-container");

// Fungsi untuk membuat hati dengan posisi dan warna acak
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Posisi acak untuk setiap hati
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;

    // Skala acak untuk ukuran hati
    const scale = Math.random() * 0.5 + 0.5;
    heart.style.transform = `scale(${scale}) rotate(-45deg)`;

    // Kecepatan animasi acak
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`;

    heartsContainer.appendChild(heart);

    // Hapus hati setelah beberapa detik untuk menghindari kebanyakan elemen di layar
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Buat hati baru setiap 500ms
setInterval(createHeart, 500);