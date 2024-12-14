// assets/js/products.js

window.addEventListener('load', async function () {
  const response = await fetch('/api/products');
  const products = await response.json();

  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - ${product.description} - $${product.price}`;
    productList.appendChild(li);
  });
});
