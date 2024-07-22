document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById('product-list');

    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <button>Buy Now</button>
                `;
                productList.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
