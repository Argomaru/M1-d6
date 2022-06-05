// class
// template untuk buat object
//bisa buat bikin 2 hal yaitu object dan function
// 1 class bisa punya lebih dari 1 property/fungsi
//setiap bikin class harus ada constructor
//constructor = digunakan untuk buat property (kek function buat cipatein object)

// //syntax
// class NameOfClass {
//     constructor(parameters){
//         this.property = value,
//         this.property = value
//     }
//     method() {}
// }



class namaclass{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
        this.harga = 10000;
    }
}


let identitas = new namaclass ("jason", "23");
console.log(identitas.nama);
identitas.harga = 20000;
console.log(identitas.harga);


//hasilnya jason
//         20000

//misal






class anjing{
    constructor(nama, umur, jenis = "dober"){
    }}

 
    let dog = new anjing ("asu", "12")
  dog.jenis = "chihuahua"
  console.log(dog.jenis)

//maka hasilnya akan nimpa jadi chihuahua






class artist{
    constructor(name) {

        (this.name = name), (this.country = "Indonesia"), (this.year = 2020);
    }

    intro() { //seua function yang isinya bisa disesuaikan
        console.log("I am a singer" + this.name);
    }
}

let isyana = new artist(" Isayana");
let dude = new artist(" dude");
let boi = new artist(" boi");


isyana.intro(); //I am a singer Isayana

let kumpulanartis = [isyana, dude, boi];

dude.intro(); //I am a singer dude

kumpulanartis.forEach((artist) => {
    console.log(artist);
});// hasilnya jadi
    // artist { name: ' Isayana', country: 'Indonesia', year: 2020 }
    // artist { name: ' dude', country: 'Indonesia', year: 2020 }
    // artist { name: ' boi', country: 'Indonesia', year: 2020 }






    class car {
        constructor(name, year){
            this.name = name;
            this.year = year;
        }
        age(){
            let date = new Date();
            return date.getFullYear() - this.year;
        }
    }
let myCar = new car ("JCW", 2014);

console.log("My car is " + myCar.age() + " years old."); //My car is 8 years old.
console.log(myCar.name + " " + myCar.year); //JCW 2014






class product {
    constructor(productname, price) {
        this.productname = productname;
        this.price = price;
        this.qty = 0;
    }
//method 1
calculate() {
    return this.price * this.qty;
}
//method 2
toString() {
    return "product ini berharga Rp.";
}
}

let apel = new product("apel", 2000);
apel.qty = 2;
apel.warna = "merah ";
console.log("warna apel ini adalah "+ apel.warna + apel.toString() + apel.calculate());
//warna apel ini adalah merah product ini berharga Rp.4000



//inheritance

// class book extends product{ //nurunin class dari clas lain
//     constructor(productname, price, author, pages){
//         super(productname, price);
//         this.author = author;
//         this.pages = pages;

//     }
// }

// let buku = new book("Buku nikah", 2000, "Jason", 50);
// buku.qty = 3;
// console.log(buku.calculate());



