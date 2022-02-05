import React, { useEffect } from 'react';

const AvoProject = () => {

    const baseUrl = 'https://platzi-avo.vercel.app';
    const appNote = document.querySelector('#avoProductContainer');

    async function fetchData() {
        debugger
        const response = await fetch(`https://platzi-avo.vercel.app/api/avo`),
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
            price.textContent = item.price;

            const container = document.createElement("div");
            container.className = "avoProductCard";
            container.append(image, title, price);

            allItems.push(container);
        });

        appNote.appendChild(...allItems);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div id='avoProductContainer'>
        </div>
    );
};

export default AvoProject;