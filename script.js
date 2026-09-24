function showPopup(pesan) {
    alert(pesan);
}

const tombolTambah = document.getElementById('tombol-tambah');
const inputRekomendasi = document.getElementById('input-rekomendasi');
const daftarRekomendasi = document.getElementById('daftar-rekomendasi');

tombolTambah.addEventListener('click', function() {
    const teks = inputRekomendasi.value.trim();
    
    if (teks !== '') {
        showPopup('Rekomendasi berhasil ditambahkan!');
        
        const rekomendasiBaru = document.createElement('div');
        rekomendasiBaru.className = 'rekomendasi';
        rekomendasiBaru.innerHTML = `<p>${teks}</p>`;
        
        daftarRekomendasi.appendChild(rekomendasiBaru);
        inputRekomendasi.value = '';
    }
});
