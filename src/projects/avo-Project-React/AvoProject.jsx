import React, { useEffect, useState } from 'react';
import AvoProductCard from '../avo-Project-React/AvoProductCard';
import '../avo-project/avoStyles.css'

const AvoProject = () => {
    const [products, setProducts] = useState([]);
    const baseUrl = 'https://platzi-avo.vercel.app'

    useEffect(() => {
        fetchData()
    }, []);

    async function fetchData() {
        const response = await fetch(`${baseUrl}/api/avo`);
        const avoData = await response.json();
        setProducts(avoData.data);
    }

    return (
        <div id='avoProductContainer'>
            {products.map(item => {
                return (
                    <AvoProductCard avoProductImageURL={`${baseUrl}${item.image}`} AvoProductName={item.name} avoProductPrice={item.price} />
                );
            })}
        </div>
    );
};
export default AvoProject;