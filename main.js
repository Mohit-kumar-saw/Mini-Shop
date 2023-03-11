

let data = [
  {
    id: "1",
    imageUrl:
      "https://www.energysistem.com/cdnassets/products/45303/principal_2000.jpg",
    productName: "Boat Stone 650",
    price: 2000,
  },
  {
    id: "2",
    imageUrl:
      "https://rukminim1.flixcart.com/image/416/416/l4u7vrk0/headphone/l/a/1/100-hours-playtime-wireless-earbuds-bluetooth-headphones-xerovex-original-imagfnjyztqzddeg.jpeg?q=70",
    productName: "Mi  Headphones",
    price: 1800,
  },
  {
    id: "3",
    imageUrl:
      "https://specials-images.forbesimg.com/imageserve/5e8ce586748506000636107e/Beats-Studio3-Wireless-Noise-Cancelling-On-Ear-Headphones/960x0.jpg?fit=scale",
    productName: "Boat Headphone ",
    price: 2200,
  },
  {
    id: "4",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1133/9398/products/Audio-Technica-ATH-M40x-Headphones-australia-2_7b082e1a-ea5b-430a-88c1-c1cad6b029ce_384x384.jpg?v=1658308894",
    productName: "Samsung S22",
    price: 6000,
  },
  {
    id: "5",
    imageUrl:
      "https://www.montblanc.com/variants/images/46353151655575960/A/w2500.jpg",
    productName: "Urbanista Miami",
    price: 1200,
  },
  {
    id: "6",
    imageUrl:
      "https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2022/08/Hesh-ANC_True-Black_S6HHW-N740_Hero_v001.jpg",
    productName: "JAYA Headphone",
    price: 2800,
  },
  {
    id: "7",
    imageUrl:
      "http://cdn.shopify.com/s/files/1/1676/7297/products/Main-Image_grande.jpg?v=1613022858",
    productName: "BOAt Headphone",
    price: 2400,
  },
  {
    id: "8",
    imageUrl:
      "https://www.bhphotovideo.com/images/images2000x2000/bose_761529_0030_soundsport_wireless_in_ear_headphones_1282105.jpg",
    productName: "MI Headphone",
    price: 2000,
  },
  {
    id: "9",
    imageUrl:
      "https://www.energysistem.com/cdnassets/products/45303/principal_2000.jpg",
    productName: "Boat Stone 650",
    price: 2000,
  },
  {
    id: "10",
    imageUrl:
      "https://rukminim1.flixcart.com/image/416/416/l4u7vrk0/headphone/l/a/1/100-hours-playtime-wireless-earbuds-bluetooth-headphones-xerovex-original-imagfnjyztqzddeg.jpeg?q=70",
    productName: "Mi  Headphones",
    price: 1800,
  },
  {
    id: "11",
    imageUrl:
      "https://specials-images.forbesimg.com/imageserve/5e8ce586748506000636107e/Beats-Studio3-Wireless-Noise-Cancelling-On-Ear-Headphones/960x0.jpg?fit=scale",
    productName: "Boat Headphone ",
    price: 2200,
  },
  {
    id: "12",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1133/9398/products/Audio-Technica-ATH-M40x-Headphones-australia-2_7b082e1a-ea5b-430a-88c1-c1cad6b029ce_384x384.jpg?v=1658308894",
    productName: "Samsung S22",
    price: 6000,
  },
];



console.log("motny")

function display(data) {
  let fetchdata = (product) => {
    document.querySelector("#root").innerHTML = "";
    let i = 0;
    product.map((el, index) => {
      let card = document.createElement("div");
      card.className = "card";

      let image = document.createElement("img");
      image.src = el.imageUrl;
      image.className = "card1";

      let span = document.createElement("span");
      span.innerText = el.productName;
      span.className = "card1";

      let h5 = document.createElement("h5");
      h5.innerText = "$ " + el.price;
      h5.className = "card1";

      let btn = document.createElement("button");
      btn.className = "card-btn card1";
      btn.addEventListener("click", () => {
        addToCart(el, index);
      });

      btn.innerText = "Add to cart";

      card.append(image, span, h5, btn);
      document.querySelector("#root").append(card);
    });
  };


  fetchdata(data);
}

display(data);

let cart = [];
let total = 0;
let count=0;

 


function addToCart(el, index) {

  // payload
  let item = {
    id: el.id,
    image:el.imageUrl,
    productName: el.productName,
    price: el.price,
    quantity: 1,
  };

  cart.push(item);
  total += item.price;

  let cartItem = document.createElement("div");
  cartItem.className = "cart-item";
  
  let image = document.createElement("img");
      image.src = item.image;
      image.className = "card1";

  let itemName = document.createElement("span");
  itemName.innerText = item.productName;
  itemName.className = "cart-name";

  let itemPrice = document.createElement("span");
  itemPrice.innerText = "$" + item.price;
  itemPrice.className = "cart-price";

  

  let itemDelete = document.createElement("button");
  itemDelete.className ='delete fa fa-trash-o';
  itemDelete.addEventListener("click", () => {
    deleteItem(index);
  });

  cartItem.append(image,itemName, itemPrice, itemDelete);
  document.querySelector(".cart-items").append(cartItem);

  document.querySelector(".count").innerHTML = ++count;
  document.querySelector(".total-price").innerHTML = "Total: $" + total;
}

function deleteItem(index) {
  let item = cart[index];
  cart.splice(index, 1);
  total -= item.price

  renderCart();

}


function renderCart() {
  let cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    let image = document.createElement("img");
      image.src = item.image;
      image.className = "card1";

    let itemName = document.createElement("span");
    itemName.innerText = item.productName;
    itemName.className = "cart-name";

    let itemPrice = document.createElement("span");
    itemPrice.innerText = "$" + item.price;
    itemPrice.className = "cart-price";

    

    let itemDelete = document.createElement("button");
    itemDelete.className = 'delete fa fa-trash-o';
    itemDelete.addEventListener("click", () => {
      deleteItem(index);
    });

    cartItem.append(image,itemName, itemPrice, itemDelete);
    cartItems.appendChild(cartItem);
    console.log("motny")
  });
  document.querySelector(".count").innerHTML = --count;

  document.querySelector(".total-price").innerHTML = "Total: $" + total;
 
}
