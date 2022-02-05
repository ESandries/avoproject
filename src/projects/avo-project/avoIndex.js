const baseUrl = 'https://platzi-avo.vercel.app'
const appNote = document.querySelector('#avoProductContainer')

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD"
    }).format(price)

    return newPrice;
}

async function fetchData() {
  const response = await fetch(`${baseUrl}/api/avo`),
    APIData = await response.json(),
    allItems = [];

  APIData.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    image.src = `${baseUrl}${item.image}`;
    image.className = 'avoProductImage';
    // create title
    const title = document.createElement("h2");
    title.textContent = item.name;
    title.className = "avoProductName";

    // Create description
    const description = document.createElement("p");
    description.textContent = item.attributes.description;
    description.className = "avoProductDescription";

    // create price
    const price = document.createElement("div");
    price.textContent = formatPrice(item.price);

    const container = document.createElement("div");
    container.className = "avoProductCard";
    container.append(image, title , price);

    allItems.push(container);
  });

  appNote.append(...allItems);
}

fetchData();