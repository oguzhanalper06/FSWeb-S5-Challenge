// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>

import axios from "axios";

//
const Tablar = (konu) => {
  let topicsA = document.createElement("div");
  topicsA.classList.add("topics");

  konu.forEach((element) => {
    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = element;
    topicsA.appendChild(tab);
  });

  return topicsA;
};

// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//
const tabEkleyici = (secici) => {
  const seciciB = document.querySelector(secici);
  axios.get("http://localhost:5001/api/konular").then((response) => {
    seciciB.appendChild(Tablar(response.data.konular));
  });
  return seciciB;
};

export { Tablar, tabEkleyici };
