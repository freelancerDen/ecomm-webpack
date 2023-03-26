const addProductCard = async (...args) => {
  const [url, wrapper, filter] = args;

  let { data } = await axios(url);
  if (filter === "instock") {
    data.products.filter((item) => {
      if (item.avaliable) {
        wrapper.appendChild(
          createCard(item.id, item.imgUrl, item.title, item.price)
        );
      }
    });
  } else if (filter === "hot") {
    data.products.filter((item) => {
      if (item.hot) {
        wrapper.appendChild(
          createCard(item.id, item.imgUrl, item.title, item.price)
        );
      }
    });
  } else {
    data.products.forEach((item) => {
      wrapper.appendChild(
        createCard(item.id, item.imgUrl, item.title, item.price)
      );
    });
  }
};

const createCard = (id, imageUrl, title, price) => {
  const prodWrapper = document.createElement("div");
  prodWrapper.setAttribute("id", id);
  prodWrapper.classList.add("product-wrapper");
  prodWrapper.innerHTML = `
      <div class="product__image">
        <div class="product__image_container" style="background-image: url('${imageUrl}')"></div>
        <button class="product__add-to-favorite"></button>
      </div>
      <div class="product__description">
        <h3 class="title">
          ${title}
        </h3>
        <div class="product__cart-block">
          <p class="product__cart-block__price">${price} $</p>
          <button class="product__cart-block__add-to-cart"></button>
        </div>
      </div>
    `;
  return prodWrapper;
};

export default addProductCard;
