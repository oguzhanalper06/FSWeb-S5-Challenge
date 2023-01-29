// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//
const Header = (baslik, tarih, yazi) => {
  let headerA = document.createElement("div");
  headerA.classList.add("header");

  let dateA = document.createElement("span");
  dateA.classList.add("date");
  dateA.textContent = "29 Ocak 2023";
  headerA.appendChild(dateA);

  let h1A = document.createElement("h1");
  h1A.textContent = "Teknoloji Zamanı";
  headerA.appendChild(h1A);

  let tempA = document.createElement("span");
  tempA.classList.add("temp");
  tempA.textContent = "sağdaki yazı";
  headerA.appendChild(tempA);

  return headerA;
};

const headerEkleyici = (secici) => {
  const seciciA = document.querySelector(secici);
  seciciA.appendChild(
    Header("Teknoloji Zamanı", "29 Ocak 2023", "sağdaki yazı")
  );
  return seciciA;
};

export { Header, headerEkleyici };

// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
