// Fungsi untuk menghitung luas persegi
function hitungLuas() {
    let sisi = document.getElementById("sisiLuas").value;

    // Validasi input agar tidak kosong dan merupakan angka positif
    if (sisi === "" || isNaN(sisi) || sisi <= 0) {
        alert("Masukkan nilai sisi yang valid!");
        return;
    }

    // Konversi nilai input menjadi angka
    sisi = parseFloat(sisi);

    let hasilLuas = sisi * sisi;

    let output = `
        L = S x S <br>
        L = ${sisi} x ${sisi} <br>
        L = ${hasilLuas}
    `;

    document.getElementById("hasilLuas").innerHTML = output;
}

// Fungsi untuk menghitung keliling persegi
function hitungKeliling() {
    let sisi = document.getElementById("sisiKeliling").value;

    // Validasi input agar tidak kosong dan merupakan angka positif
    if (sisi === "" || isNaN(sisi) || sisi <= 0) {
        alert("Masukkan nilai sisi yang valid!");
        return;
    }

    // Konversi nilai input menjadi angka
    sisi = parseFloat(sisi);

    let hasilKeliling = 4 * sisi;

    let output = `
        K = 4 x S <br>
        K = 4 x ${sisi} <br>
        K = ${hasilKeliling}
    `;

    document.getElementById("hasilKeliling").innerHTML = output;
}

// Fungsi untuk mereset input dan hasil
function resetLuas() {
    document.getElementById("sisiLuas").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
}

function resetKeliling() {
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
}

function hitungLuasPersegiPanjang() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;

    if (panjang && lebar) {
        let hasilLuas = panjang * lebar;

        let outputLuas = `
            L = P x L <br>
            L = ${panjang} x ${lebar} <br>
            L = ${hasilLuas}
        `;

        document.getElementById("hasilLuasPersegiPanjang").innerHTML = outputLuas;
    } else {
        alert("Masukkan panjang dan lebar!");
    }
}


function resetLuasPersegiPanjang() {
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";
    document.getElementById("hasilLuasPersegiPanjang").innerText = "";
}

function hitungKelilingPersegiPanjang() {
    let panjang = document.getElementById("panjangKeliling").value;
    let lebar = document.getElementById("lebarKeliling").value;

    // Validasi input agar tidak kosong dan harus angka positif
    if (panjang === "" || lebar === "" || isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
        alert("Masukkan panjang dan lebar yang valid!");
        return;
    }

    // Konversi nilai input ke angka desimal
    panjang = parseFloat(panjang);
    lebar = parseFloat(lebar);

    let keliling = 2 * (panjang + lebar);

    let output = `
        K = 2 × (P + L) <br>
        K = 2 × (${panjang} + ${lebar}) <br>
        K = ${keliling}
    `;

    document.getElementById("hasilKelilingPersegiPanjang").innerHTML = output;
}

function resetKelilingPersegiPanjang() {
    document.getElementById("panjangKeliling").value = "";
    document.getElementById("lebarKeliling").value = "";
    document.getElementById("hasilKelilingPersegiPanjang").innerText = "";
}

document.addEventListener("DOMContentLoaded", function () {
    // Ambil tombol navigasi
    const btnPersegi = document.getElementById("persegiBtn");
    const btnPersegiPanjang = document.getElementById("persegipanjangBtn");

    // Ambil section yang ingin ditampilkan/sembunyikan
    const sectionPersegi = document.getElementById("persegiSection");
    const sectionKelilingPersegi = document.getElementById("kelilingPersegi");
    const sectionPersegiPanjang = document.getElementById("persegiPanjangSection");
    const sectionKelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang")

    // Pastikan semua elemen ditemukan sebelum lanjut
    if (!btnPersegi || !btnPersegiPanjang || !sectionPersegi || !sectionKelilingPersegi || !sectionPersegiPanjang) {
        console.error("Ada elemen yang tidak ditemukan! Pastikan ID elemen sudah benar.");
        return;
    }

    // Event listener untuk tombol Persegi
    btnPersegi.addEventListener("click", function () {
        sectionPersegi.style.display = "block";  // Bisa diganti "flex" jika menggunakan Flexbox
        sectionKelilingPersegi.style.display = "block";
        sectionPersegiPanjang.style.display = "none";
        sectionKelilingPersegiPanjang.style.display = "none";
    });

    // Event listener untuk tombol Persegi Panjang
    btnPersegiPanjang.addEventListener("click", function () {
        sectionPersegiPanjang.style.display = "block";
        sectionKelilingPersegiPanjang.style.display = "block";
        sectionPersegi.style.display = "none";
        sectionKelilingPersegi.style.display = "none";
    });

    // Sembunyikan semua section di awal, kecuali section Persegi
    sectionPersegi.style.display = "block";  // Default tampilan pertama
    sectionKelilingPersegi.style.display = "block";
    sectionPersegiPanjang.style.display = "none";
    sectionKelilingPersegiPanjang.style.display = "none";
});
