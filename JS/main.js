
/*let arrayObject=[45,78,'salom','matn',true,false];

console.log(arrayObject[2]);*/

/*let oddiyobject={ism:"Samandar",yoshi:19}

let talabami ='19';

if (oddiyobject.yoshi <18){
    talabami = "17"
}
else if()
console.log("Samandar nechi yosh?" +talabami)*/

let sana = new Date()

sana.setFullYear( 2005);
sana.setDate(12)
let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftakuni = sana.getDay()
let sekund = sana.getSeconds()
let minut = sana.getMinutes()
let lillisekund = sana.getUTCMilliseconds()

let oylar = ["iyun","iyul","Yanvar","fevral","mart", "aprel", "may", "avgust", "sentyabr" ,"oktyabr" ,"noyabr" ,"dekabr"]

let hafta = ["yakshanba","dushnba","seshanba","chorshanba", "payshanba", "juma", "shanba"]

let kunlar = '12'


document.write("Shu vaqtda " +yil+ "-yil" + oylar[oy] + kun + "-kuni.Haftaning esa " +hafta [haftakuni]+ "-kuni edi. ");



