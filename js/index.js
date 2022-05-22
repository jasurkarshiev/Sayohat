const Pul = Number(prompt("Pul kiriting"));

const birDollar = 10897;
const birEvro = 12248;

const sarfBilet = 500 * birDollar;
const sarfMexmonhona = 250 * birDollar;
const sarfMuzey = 120 * birEvro;

const obshiysarf = sarfBilet + sarfMexmonhona + sarfMuzey;
console.log(obshiysarf);

if (obshiysarf <= Pul) {
console.log("Oq yo’l, Alisher!");
} else{
    console.log("Alisher, ozgina sabr qilish kerak bo’lar ekan.");
}