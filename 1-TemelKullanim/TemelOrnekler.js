// NODE.JS GİRİŞ
console.log("-----------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------");
console.log("NODE.JS GİRİŞ");
console.log("-----------------------------------------------------------------------------");
var a = 13;
var b = "merhaba dünya";
var c = "13";
console.log(a);
console.log(b);
var kisi ={
	isim : "ali",
	soyisim : "demir",
	yas : 20
};
console.log(kisi);
console.log(kisi.isim);

// concatination
console.log(kisi.isim+ " > " + kisi.soyisim + " > " + kisi.yas);

// string ile int değer toplanırsa iki değer string bir değer gibi concat edilir.
console.log(c + kisi.yas);
console.log(a + kisi.yas);

// parseInt sayısal bir değeri integer bir değere çevirmek için kullanılır
var d = parseInt(c)+100;
console.log(d + kisi.yas);
// toString ile bir int değeri string bir değere çevirebiliriz.
var e = d.toString();
console.log(e + kisi.yas);
// işlem önceliği
var f =(13+22*11-3/4);
console.log(typeof(f) + " > " + f);

// FONKSİYONLAR
console.log("-----------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------");
console.log("fonksiyonlar");
console.log("-----------------------------------------------------------------------------");

function fonk(x,y){
	return x + y +5;
}
console.log(fonk(10,11));

// değişken içerisine fonksiyon atamak - burada fonksiyon değişkeni bir pointer görevi görür fonksiyon() şeklinde
// fonksiyon çağrıldığında  ekrana "merhaba dünya" yazıdırır.
var fonksiyon=function(){
	console.log("merhaba dünya");
}
fonksiyon();

// recursive fonksiyon örneği
function fact(n){
	if(n==0)
		return 1;
	return n*fact(n-1);
}
console.log(fact(5));


// bir fonksiyonun çalışmasına bekleme verebiliriz setTimeout(fonksiyon,milisaniye);
function mesaj(){
	console.log("gecikmeli mesaj");
}
setTimeout(mesaj,4000);

// DÖNGÜLER
console.log("-----------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------");
console.log("döngüler");
console.log("-----------------------------------------------------------------------------");

for (a=1;a<10;a++){
	console.log("merhaba");
	console.log(a);
}
console.log("-----------------------------");

k=10000;
if(k<200)
	console.log(k);
else if(k>10000){
	console.log("sayı değeri büyük");
}
else{
	console.log("sayı değeri geçerli");
}


while(k>1){
	console.log(k);
	k/=10;
}

	