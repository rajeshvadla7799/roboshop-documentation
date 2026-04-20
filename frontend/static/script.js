fetch("/api/catalogue/products")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("products");

    data.forEach(p => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <img src="images/${p.image}" />
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <strong>₹${p.price}</strong>
      `;

      container.appendChild(div);
    });
  });