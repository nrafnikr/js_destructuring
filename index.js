// Destructuring Array
let listWarna = ["Merah", "Kuning", "Hijau", "Biru", "Putih"];
let warna1 = listWarna[0];
let warna2 = listWarna[1];
let warna3 = listWarna[2];
console.log(warna1, warna2, warna3);

// Destructur
let [pertama, kedua, ketiga, ...lainnya] = listWarna;
console.log(pertama, kedua, ketiga, lainnya);



// Destructuring Object
let product = {
  nama: "Mie Instant",
  harga: 3000,
  stock: 100,
  weight: 200,
  distributor: {
    perusahaan: "PT Rasa Indonesia",
    asal: "Bekasi"
  }
};

let namaProduct = product.nama;
let hargaProduct = product.harga;
let perusahaanDistributor = product.distributor.perusahaan;
console.log(namaProduct, hargaProduct, perusahaanDistributor);

// destructur
let {
  nama,
  harga,
  distributor: { perusahaan },
  ...dataLainya
} = product;
console.log(nama, harga, perusahaan, dataLainya);



// Destructuring di Function Parameter
function pembagian([angka1, angka2]) {
  let pembagian = angka1 / angka2;
  let pesan = `hasil pembagian dari kedua bilangan adalah ${pembagian}`;
  console.log(pesan);
}

function printProduct({ nama, harga, distributor: { perusahaan } }) {
  const pesan = `Product ${nama} dari ${perusahaan} dijual dengan harga ${harga}`;
  console.log(pesan);
}

printProduct(product);
pembagian([20, 10]);



// Destructuring Default Value dan Alias
let mahasiswi = {
  nama: "Nur Afni",
  gender: "female",
  usia: 20,
  domisili: "jakarta",
  kuliah: {
    jurusan: "business",
    semester: "7"
  }
};

function resultInfoMahasiswi ({nama, gender, domisili:dom, konsentrasi = "international business"}) {
  console.log (nama, gender, dom, konsentrasi)
}
resultInfoMahasiswi(mahasiswi);