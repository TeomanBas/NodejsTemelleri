var http=require('http');
// hazır kod sayfamızı her seferin oluşturmadan dosya sistemimiz içerisinden direk olarak response olarak döndürebiliriz.
var fs=require('fs');
function baglanti(request,response){
	/*
	eğer her bağlanıldığında aynı sayfayı göndermek istemiyorsak örn login sayfası direk olarak 
	erişilen bir sayfa olmamalıdır bunları ayırt etmek için koşulları kullanabiliriz ve
	bağlanılmayı istenen sayfaya özel kodlar yazabiliriz*/
	if (request.url=='/'){
		/*response kendimiz oluşturuyoruz
		*
		// gelen istek yazdırıldı
		console.log(request);
		// gönderdiğimz http paketinin haeder bilgisi
		response.writeHeader(200,{'Context-Type': 'text-plain'});
		//html içeriğini değişken olaraktanımlayabiliriz.
		var degisken='<html><head><meta Charset="utf-8"></haed><body>';
		for (i=0;i<10;i++){
			degisken +='<h1>node.js den merhaba dünya </h1>'
		}
		degisken +='</body></html>';
		
		response.write(degisken);
		// response bitirildi.
		response.end();
		*
		*/
		
		/*dosya sistemimizden bir dosya yı pipe fonksiyonu ile gönderebiliriz
		
		*/
		console.log(request);
		response.writeHeader(200,{'Context-Type': 'text-plain'});
		// buşekilde dosyayı stream etmiş olduk bu durumda sunucuyu kapatıp 
		// açmadan stream edilen dosya üzerinde değişiklikler yapabiliriz.
		fs.createReadStream('./anasayfa.html').pipe(response);
		
		
	}else{
		console.log(request);
		response.writeHeader(404,{'Content-Type':'text-plain'});
		response.write('hatalı sayfa');
		response.end();
	}
}
http.createServer(baglanti).listen(80);
console.log("sunucu çalışıyor");