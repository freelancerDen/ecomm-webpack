const addProductCard = async (url, wrapper) => {
  let { data } = await axios(url);
  data.products.forEach((item) => {
    wrapper.appendChild(
      createCard(item.id, item.imgUrl, item.title, item.price)
    );
  });
};

const createCard = (id, imageUrl, title, price) => {
  console.log("count$");
  const prodWrapper = document.createElement("div");
  prodWrapper.setAttribute("id", id);
  prodWrapper.classList.add("product-wrapper");
  prodWrapper.innerHTML = `
      <div class="product__image">
        <div class="product__image_container style="background: url('${url}')"></div>
        <button class="product__add-to-favorite" onclick="addToFavorite(${id})"></button>
      </div>
      <div class="product__description">
        <h3 class="title">
          ${title}
        </h3>
        <div class="product__cart-block">
          <p class="product__cart-block__price">${price} $</p>
          <button class="product__cart-block__add-to-cart" onclick="addToCart(${id})"></button>
        </div>
      </div>
    `;
  return prodWrapper;
};

export default addProductCard;
