//DYNAMIC HTML CREATION

//dynamically create product divs (containers)
const productClasses = [
  "product pc",
  "product pc",
  "product periferico",
  "product periferico",
  "product periferico",
  "product periferico",
  "product hardware",
  "product hardware",
  "product hardware",
  "product hardware",
  "product hardware",
  "product hardware",
  "product hardware",
  "product hardware",
  "product software",
  "product hardware",
  "product hardware",
  "product hardware",
  "product hardware",
  "product hardware",
];

for (let i = 0; i < 20; i++) {
  const divToBeMade = document.createElement("div");
  divToBeMade.setAttribute("id", `product-id-${i}`);
  divToBeMade.className = `${productClasses[i]}`;
  const catalogue = document.querySelector(".catalogue");
  catalogue.appendChild(divToBeMade);
}

//dynamically create image frames
const allProducts = document.querySelectorAll(".product");

for (let i = 0; i < allProducts.length; i++) {
  const frame = document.createElement("div");
  frame.className = "frame";
  allProducts[i].appendChild(frame);
}

//dynamically add product titles
const productTitles = [
  "PC GAMER RHYNOS",
  "PC GAMER IGNIS",
  "RAZER KRAKEN PRO 7.1",
  "RAZER KRAKEN PRO TOURNAMENT EDITION",
  "RAZER DEATHADDER CHROMA V2",
  "RAZER CYNOSA V2",
  "INTEL CORE I7 11700F 11ª GERAÇÃO",
  "INTEL CORE I9 13900KF 13ª GERAÇÃO",
  "INTEL CORE I7 X-SERIES",
  "AMD RYZEN 5 4600G",
  "AMD RYZEN 7 5700X",
  "AMD RYZEN 7 5800X",
  "MEMORIA RAM RGB 8GB TRIDENTZ",
  "MEMORIA RAM 16GB (8X2) KINGSTON",
  "MICROSOFT OFFICE 365",
  "NVIDIA RTX 3050",
  "NVDIA RTX 3060",
  "NVIDIA RTX 3070 TI",
  "NVIDA RTX 3080",
  "NVIDIA RTX 3090",
];

for (let i = 0; i < allProducts.length; i++) {
  const productToBeTitled = document.createElement("p");
  productToBeTitled.setAttribute("id", `product-title-${i}`);
  productToBeTitled.textContent = `${productTitles[i]}`;
  allProducts[i].appendChild(productToBeTitled);
}

//dynamically add product description
var productDescription = [
  "Poderosa maquina. Com este setup você pode jogar todos os jogos atuais em configurações gráficas média pra alta.",
  "Com o Ignis você eleva sua gameplay para o próximo patamar. Este setup é capaz de executar todos os jogos atuais em configurações gráficas máximas.",
  "O Headset Gamer Razer Kraken é uma referência para os gamers que curtem um jogo mais realista e imersivo, com detalhes sonoros que envolvem e tornam a experiência gamer ainda mais gostosa e completa. ",
  "O Headset Gamer Razer Kraken Tournament Edition foi projetado pensando no conforto extremo, qualidade sonora e versatilidade com compatibilidade para os principais consoles e acessórios atuais, para atender os usuários mais exigentes.",
  "Veja com seus próprios olhos o renascimento de um ícone com o Razer DeathAdder V2, um mouse ergonômico projetado com curvas mortais e linhas agressivas, uma arma que se manuseia como nenhuma outra. Com sensor e switches de última geração dentro de um formato mais leve, ele dá forma a uma nova era alto desempenho nos jogos.",
  "Pinte seu jogo com uma luz verdadeiramente envolvente com o Razer Cynosa V2 - o teclado de jogos RGB essencial. Com iluminação personalizável em cada tecla, veja-a ganhar vida enquanto joga em títulos integrados ao Chroma e adote uma experiência de jogo da qual você nunca vai querer se afastar.",
  "Processador Intel Core i7 de décima primeira geração, contando com 8 núcleos de até 4.8Ghz.",
  "Processador Intel Core i9 de décima terceira geração, contando com 24 núcleos de até 5.7Ghz.",
  "Processador Intel Core i7, contando com 24 núcleos de até 5.8Ghz.",
  "O AMD Ryzen 5 4600G conta com 6 núcleos e 12 threads, impulsionando o desempenho do seu Computador com clocks de até 4,2 Ghz com Max Boost e 8MB de cache L3 total.",
  "Os processadores AMD Ryzen e as placas de vídeo AMD Radeon com Windows possibilitam a experiência definitiva de jogos por meio de gráficos superiores, desempenho incrível, recursos de segurança otimizados e suporte para os recursos mais recentes.",
  "O AMD Ryzen 7 5800X3D é o primeiro processador de desktop com cache L3, oferecendo 96 MB incomparáveis de cache L3 emparelhado com núcleos incrivelmente rápidos para criar o processador para jogos mais rápido do mundo.",
  "A memória TRIDENTZ DDR4 proporciona um poderoso aumento de performance para jogos, edição de vídeo e renderização. ",
  "A memória Kingston FURY Beast DDR4 proporciona um poderoso aumento de performance para jogos, edição de",
  "A memória Kingston FURY Beast DDR4 proporciona um poderoso aumento de performance para jogos, edição de vídeo e renderização",
  "Office Home & Student te ajuda a criar conteúdo e trabalhar junto à sua família com ferramentas de produtividade.",
  "A GeForce RTX 3050 foi desenvolvida com o poderoso desempenho gráfico da arquitetura NVIDIA Ampere. Ela apresenta RT Cores de 2ª geração e Tensor Cores de 3ª geração dedicados, novos multiprocessadores de streaming e conta com uma memória de 8GB GDDR6 de alta velocidade, além de uma velocidade de 14Gbps para encarar os games mais atuais.",
  "Equipado com ventoinhas gêmeas de 90 mm e design prático especial para dissipação de calor, a textura e aparência de carbono exclusivas trazem o máximo de frescor da placa.",
  "Placa de Vídeo EVGA GeForce RTX 3070 Ti XC3 ULTRA GAMING 10GB é uma das mais atuais da NVIDIA.",
  "Placa de Vídeo EVGA GeForce RTX 3080 Ti XC3 ULTRA GAMING 12GB GDDR6X Apresentando as placas de vídeo EVGA GeForce RTX 3080 Ti / RTX série 3070 Ti - placas criadas e projetadas para jogadores. A GeForce RTX 3080 Ti apresenta 20% mais VRAM em comparação com a GeForce RTX 3080, enquanto a GeForce RTX 3070 Ti oferece o dobro da taxa de dados de E / S em comparação com a GeForce RTX 3070.",
  "Placa de Vídeo Zotac NVIDIA GeForce RTX 3090 Trinity The Ultimate Play A placa de vídeo GeForce RTX™ 3090 conta com a tecnologia Ampere — a 2ª geração da arquitetura RTX da NVIDIA. Desenvolvida com RT Cores e Tensor Cores avançados, novos multiprocessadores de streaming e uma memória G6 de alta velocidade, ela oferece a potência necessária para você detonar nos games mais exigentes.",
];

for (let i = 0; i < allProducts.length; i++) {
  const productDescriptionToBePut = document.createElement("span");
  productDescriptionToBePut.classList = "description";
  productDescriptionToBePut.textContent = `${productDescription[i]}`;
  allProducts[i].appendChild(productDescriptionToBePut);
}

//dynamically adds pictures to products
for (let i = 0; i < allProducts.length; i++) {
  const img = document.createElement("img");
  img.src = `./products/product${i}.png`;
  const imageFrames = document.querySelectorAll(".product .frame");
  imageFrames[i].appendChild(img);
}

//dynamically creates prices
var price = [
  6599, 7659, 899, 569, 899, 279, 219, 1797, 3999, 2769, 599, 1349, 2149, 219,
  219, 519, 2499, 2949, 5149, 7689, 15999,
];

function getNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

for (let i = 0; i < allProducts.length; i++) {
  const productPrice = document.createElement("span");
  productPrice.classList = "price";
  productPrice.setAttribute("id", `price-${i}`);
  productPrice.textContent = `R$ ${getNumberWithCommas(price[i])},00`;
  allProducts[i].appendChild(productPrice);
}

//dynamically creates buttons

for (let i = 0; i < allProducts.length; i++) {
  const buyButton = document.createElement("button");
  buyButton.setAttribute("id", `buy-btn-${i}`);
  buyButton.textContent = "ADICIONAR AO CARRINHO";
  allProducts[i].appendChild(buyButton);
}

//DOM MANIPULATION EVENT LISTENERS
//cart and login menu

const cartBtn = document.querySelector(".cart-btn");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cartNavBar = document.querySelector(".mobile-nav");
const loginBtn = document.querySelector(".login-btn");
const loginCloseBtn = document.querySelector(".login-close-btn");
const loginNavBar = document.querySelector(".login-nav");
const unableElements = document.getElementById("body");

//creates dynamic quantity variables
var quantities = [];
for (var i = 0; i < allProducts.length; ++i) {
  quantities[i] = 0;
}

//add products to cart on click, minus, plus and remove button behavior

const buyButtons = document.querySelectorAll(".product button");

for (let i = 0; i < allProducts.length; i++)
  buyButtons[i].addEventListener("click", function () {
    if (quantities[i] <= 0) {
      quantities[i]++;
      var cartItemDiv = document.createElement("div");
      cartItemDiv.setAttribute("id", `cart-item-${i}`);
      cartItemDiv.className = `cart-item`;
      var cartItemDivAppended = cartNavBar.appendChild(cartItemDiv);
      var cartItemImg = document.createElement("img");
      cartItemImg.src = `./products/product${i}.png`;
      cartItemDivAppended.appendChild(cartItemImg);
      //PRODUCT TITLES
      var productTitle = document.createElement("p");
      productTitle.textContent = `${productTitles[i]}`;
      cartItemDivAppended.appendChild(productTitle);
      //PLUS BUTTON
      var plusButton = document.createElement("button");
      plusButton.className = "plus";
      plusButton.addEventListener("click", function () {
        quantities[i]++;
        var quantitySpan = document.getElementById(`quantity-${i}`);
        quantitySpan.textContent = quantities[i];
        var priceUpdate = document.getElementById(`price-id-${i}`);
        var calculatedPrice = price[i] * quantities[i];
        priceUpdate.textContent = `R$ ${getNumberWithCommas(
          calculatedPrice
        )},00`;
        var sum = quantities.reduce(function (a, b) {
          return a + b;
        }, 0);
        document.querySelector(
          ".item-count"
        ).textContent = `QUANTIDADE DE ITEMS: ${sum}`;
      });
      cartItemDivAppended.appendChild(plusButton);
      var plusButtonImg = document.createElement("img");
      plusButtonImg.src = "./icons/plus.png";
      plusButton.appendChild(plusButtonImg);
      //ITEM QUANTITY
      var quantity = document.createElement("span");
      quantity.setAttribute("id", `quantity-${i}`);
      quantity.className = "quantity";
      quantity.textContent = quantities[i];
      cartItemDivAppended.appendChild(quantity);
      //MINUS BUTTON
      var minusButton = document.createElement("button");
      minusButton.className = "minus";
      minusButton.addEventListener("click", function () {
        quantities[i]--;
        var quantitySpan = document.getElementById(`quantity-${i}`);
        quantitySpan.textContent = quantities[i];
        var priceUpdate = document.getElementById(`price-id-${i}`);
        var calculatedPrice = price[i] * quantities[i];
        priceUpdate.textContent = `R$ ${getNumberWithCommas(
          calculatedPrice
        )},00`;
        var sum = quantities.reduce(function (a, b) {
          return a + b;
        }, 0);
        document.querySelector(
          ".item-count"
        ).textContent = `QUANTIDADE DE ITEMS: ${sum}`;
        if (quantities[i] <= 0) {
          var cartMenuItem = document.getElementById(`cart-item-${i}`);
          cartMenuItem.remove();
          document.querySelector(
            ".item-count"
          ).textContent = `QUANTIDADE DE ITEMS: ${sum}`;
        }
      });
      cartItemDivAppended.appendChild(minusButton);
      var minusButtonImg = document.createElement("img");
      minusButtonImg.src = "./icons/minus.png";
      minusButton.appendChild(minusButtonImg);
      //PRODUCT PRICING
      var productPrice = document.createElement("span");
      productPrice.className = "price";
      productPrice.setAttribute("id", `price-id-${i}`);
      var calculatedPrice = price[i] * quantities[i];
      productPrice.textContent = `R$ ${getNumberWithCommas(
        calculatedPrice
      )},00`;
      cartItemDivAppended.appendChild(productPrice);
      //REMOVE BUTTON
      var removeButton = document.createElement("button");
      removeButton.className = "remove";
      removeButton.setAttribute = ("id", `remove-${i}`);
      removeButton.addEventListener("click", function () {
        quantities[i] = 0;
        var sum = quantities.reduce(function (a, b) {
          return a + b;
        }, 0);
        document.querySelector(
          ".item-count"
        ).textContent = `QUANTIDADE DE ITEMS: ${sum}`;
        var cartMenuItem = document.getElementById(`cart-item-${i}`);
        cartMenuItem.remove();
      });
      cartItemDivAppended.appendChild(removeButton);
      var removeButtonImg = document.createElement("img");
      removeButtonImg.src = "./icons/xicon.png";
      removeButton.appendChild(removeButtonImg);
    } else if (quantities[i] >= 1) {
      quantities[i]++;
      var quantitySpan = document.getElementById(`quantity-${i}`);
      quantitySpan.textContent = quantities[i];
      var priceUpdate = document.getElementById(`price-id-${i}`);
      var calculatedPrice = price[i] * quantities[i];
      priceUpdate.textContent = `R$ ${getNumberWithCommas(calculatedPrice)},00`;
    }
  });

cartBtn.addEventListener("click", function () {
  var sum = quantities.reduce(function (a, b) {
    return a + b;
  }, 0);
  var precoTotal = document.createElement("div");
  precoTotal.className = "preco-total";
  var precoTotalDiv = cartNavBar.appendChild(precoTotal);
  var itemCount = document.createElement("p");
  itemCount.className = "item-count";
  itemCount.textContent = `QUANTIDADE DE ITEMS: ${sum}`;
  precoTotalDiv.appendChild(itemCount);
  var totalPrice = document.createElement("p");
  totalPrice.className = "preco-total";
  precoTotalDiv.appendChild(totalPrice);
  var compra = document.createElement("div");
  compra.className = "compra";
  compraDiv = cartNavBar.append(compra);
  compraButao = document.createElement("button");
  compraButao.textContent = "FINALIZAR COMPRA";
  compra.appendChild(compraButao);
  cartNavBar.classList.toggle("is-active");
  unableElements.classList.toggle("is-active");
});

cartCloseBtn.addEventListener("click", function () {
  cartNavBar.classList.toggle("is-active");
  unableElements.classList.toggle("is-active");
  document.querySelector(".preco-total").remove();
  document.querySelector(".compra").remove();
});

loginBtn.addEventListener("click", function () {
  loginNavBar.classList.toggle("is-active");
});

loginCloseBtn.addEventListener("click", function () {
  loginNavBar.classList.toggle("is-active");
});

//category filter
const allBtn = document.querySelector(".all-btn");
const pcCategory = document.querySelectorAll(".product.pc");
const pcBtn = document.querySelector(".pc-btn");
const hardwareCategory = document.querySelectorAll(".product.hardware");
const hardwareBtn = document.querySelector(".hardware-btn");
const softwareCategory = document.querySelectorAll(".product.software");
const softwareBtn = document.querySelector(".software-btn");
const perifericoCategory = document.querySelectorAll(".product.periferico");
const perifericoBtn = document.querySelector(".periferico-btn");

allBtn.addEventListener("click", function () {
  for (let i = 0; i < allProducts.length; i++)
    allProducts[i].className = "product";
});

pcBtn.addEventListener("click", function () {
  for (let i = 0; i < allProducts.length; i++)
    allProducts[i].className = "product-hidden";
  for (let i = 0; i < pcCategory.length; i++)
    pcCategory[i].className = "product";
});

hardwareBtn.addEventListener("click", function () {
  for (let i = 0; i < allProducts.length; i++)
    allProducts[i].className = "product-hidden";
  for (let i = 0; i < hardwareCategory.length; i++)
    hardwareCategory[i].className = "product";
});

softwareBtn.addEventListener("click", function () {
  for (let i = 0; i < allProducts.length; i++)
    allProducts[i].className = "product-hidden";
  for (let i = 0; i < softwareCategory.length; i++)
    softwareCategory[i].className = "product";
});

perifericoBtn.addEventListener("click", function () {
  for (let i = 0; i < allProducts.length; i++)
    allProducts[i].className = "product-hidden";
  for (let i = 0; i < perifericoCategory.length; i++)
    perifericoCategory[i].className = "product";
});

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search-bar");
  filter = input.value.toUpperCase();
  li = document.querySelectorAll(".product");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("p")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function clearStyle() {
  li = document.querySelectorAll(".product");
  for (i = 0; i < li.length; i++) {
    li[i].style.display = "";
  }
}
