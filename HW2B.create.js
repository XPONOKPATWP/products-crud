// assets/js/create.js

document.getElementById('create-form').addEventListener('submit', async function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;

  const response = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description, price, quantity }),
  });

  if (response.ok) {
    alert('Product created successfully!');
  } else {
    alert('Failed to create product.');
  }
});
