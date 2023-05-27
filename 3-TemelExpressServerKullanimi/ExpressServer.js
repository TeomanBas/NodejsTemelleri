// express http benzeri bir kütüphanedir
// projenin bulunduğu dizine gelerek "npm install express " komutu ile kurulur.npm node.js package manager anlamına gelir
var express =require('express');
var app = express();
var fs = require('fs');

// burada get metodu tanımlandı ve response içeriği gönderildi
app.get('/listele',function(req,res){
	// send fonksiyonu ile response gönderilebilir ancak send yada end fonksiyonlarının
	// birisi kullanılmalıdır yoksa ilk fonksiyon çalışıyor ve diğeri sayfada görüntülenmiyor
	// res.send('kullanıcıları listeleyen çağrı');
	// oluşturduğumuz json dosyası açıldı artık bu dosya içerisinden bilgi okuyabiliriz.
	fs.readFile('kullanici.json','utf8',function(err,data){
		console.log(data);
		res.end(data);
		});
});

app.get('/ekle',function(req,res){
	
	// eklenecek yeni kullanıcıyı tanımladık
	var YeniKullanici = {
		"k4" :	{
			"isim" : "kemal",
			"sifre" : 8877,
			"email" : "kemal@xyz.com"
		}
	};
	
	// 1-eklemek için önce dosyayı açıp okumamaız gerekli
	fs.readFile('kullanici.json','utf8',function(err,data){
		/*2-dosya açıldıktan sonra obje olarak data değişkeni içerisinde döndürülür.
		 * json dosyasına ekleme yapmak için json modülününün parse fonksiyonu parse edip 
		 * yeni veriyi üzerine eklememiz gereklidir,veri eklendikten sonra data değişkeni içerisinde obje olarka tutulan  
		 * verimizi http paketi olarak gönderebilmemiz için string bir değer olması gereklidir bunun içinde json modülünün stringify 
		 * fonksiyonunu kullandıkdık */
		data =JSON.parse(data);
		data["k4"] = YeniKullanici["k4"];
		//terminal üzerinde eklenen veriyi görmek için console.log ile yazdırdık
		console.log(data);
		// stringify gelen data objesini string e dönüştürür
		res.end(JSON.stringify(data));
		
		// eğer dosyaya yazmak istersek writeFile metodunu kullanıp yine yazacağımız veriyi stringe dönüştürmemiz gerekli
		fs.writeFile('kullanici.json',JSON.stringify(data),
		function(err){console.log("bir hata var");
		});
	});
});
// kullanıcıdan alınan paremetreler de kullanıcı eklenebilir örnek olarak yeni url oluşturalım ve bu urlden parametre olarak 
// kullanıcı bilgilerini alıp json dosyamıza ekleyelim
app.get('/kullaniciekle',function(req,res){
	
	// eklenecek yeni kullanıcıyı tanımladık ve uç tane değişkene eşitledik bu değişkenlerin req.query objesinin birer  nesnesi
	// ve bu değişkenlerin değerlerini url üzerinden alacağız.
	var YeniKullanici = {
		"k5" :	{
			"isim" : req.query.isim,
			"sifre" : req.query.sifre,
			"email" : req.query.email
		}
	};
	
	// 1-kullanici.json dosyamızı açtık
	fs.readFile('kullanici.json','utf8',function(err,data){
		data =JSON.parse(data);
		data["k5"] = YeniKullanici["k5"];
		console.log(data);
		res.end(JSON.stringify(data));
		fs.writeFile('kullanici.json',JSON.stringify(data),
		function(err){console.log("bir hata var");
		});
	});
});


// yine kullanıcı silmek istersek delete komutunu kullanmamız yeterli olur
app.get('/sil',function(req,res){
	fs.readFile('kullanici.json','utf8',function(err,data){
		data=JSON.parse(data);
		var id = "k"+req.query.id;
		delete data[id];
		res.end(JSON.stringify(data));
		fs.writeFile('kullanici.json',JSON.stringify(data),function(err){
			console.log("bir hata var");
		});
	});
});

// bir kullanıcıyı sorgulamak için id değerini almamız yeterli ve data[id] dizisinde kullanıp o id değerine sahip
// kişinin bilgilerini getirebiliriz. 
app.get('/sorgula',function(req,res){
	fs.readFile('kullanici.json','utf8',function(err,data){
		data=JSON.parse(data);
		var id = "k"+req.query.id;
		// id değerini data objesine indis olarak verdik ve artık data değişkeni o id değerine ait bilgileri döndürecek.
		res.end(JSON.stringify(data[id]));
	});
});

var server = app.listen(80,function(){
	console.log('sunucu çalışıyor');
});