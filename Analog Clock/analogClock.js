// 1. Konstanta untuk penghitungan jam, menit, dan detik

const deg = 6

// 2. Selector pada setiap objek HTML

const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")

// 3. Function untuk membuat jam analog

const setClock = () => {
    
// 4. Membuat variable untuk mendapatkan semua data waktu pada hari ini menggunakan method new Date()

    let day = new Date();

// 5. Mendapatkan angka jam, menit, dan detik menggunakan method getHours(), getMinutes(), dan getSeconds()

    let h = day.getHours()

// 6. Pengkondisian untuk jam analog (Angka yang didapat dari getHours() harus berformat 12)

    if (h > 12) {
        h -= 12
    }

    let hh = h * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

// 7. Menggerakkan jarum jam berdasarkan derajat (derajat didapat dari operasi penghitungan di bawah)

    hour.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
    min.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`
};

setClock()

// 8. Menjalankan function setClock setiap 1000 miliseconds/ 1 detik

setInterval(setClock, 1000)

