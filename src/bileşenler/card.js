// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//
import axios from "axios";
const Card = (makale) => {
  let card1 = document.createElement("div");
  card1.classList.add("card");

  let headline1 = document.createElement("div");
  headline1.classList.add("headline");
  headline1.textContent = makale.anabaslik;

  let author1 = document.createElement("div");
  author1.classList.add("author");

  let img1 = document.createElement("div");
  img1.classList.add("img-container");

  let src1 = document.createElement("img");
  src1.src = makale.yazarFoto;

  let span1 = document.createElement("span");
  span1.textContent = makale.yazarAdi;

  img1.appendChild(src1);
  author1.appendChild(img1);
  author1.appendChild(span1);
  card1.appendChild(headline1);
  card1.appendChild(author1);

  card1.addEventListener("click", (event) => {
    console.log(event.target.querySelector(".headline").textContent);
  });
  return card1;
};

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

const cardEkleyici = (secici) => {
  const addCard = document.querySelector(secici);
  axios.get("http://localhost:5001/api/makaleler").then((response) => {
    for (let key in response.data.makaleler) {
      for (let i = 0; i < response.data.makaleler[key].length; i++) {
        addCard.appendChild(Card(response.data.makaleler[key][i]));
      }
    }
  });
};

export { Card, cardEkleyici };
