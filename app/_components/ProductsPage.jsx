"use client"

import { useState } from 'react';
import Card from './Card';
import Button from './Button';

const ProductsPage = ({ initialProducts, totalProducts = 0 }) => {
    const [data, setData] = useState(initialProducts);
    const [offset, setOffset] = useState(10);
    const [loading, setLoading] = useState(false);
    const hasMoreProducts = data.length < totalProducts;

    const loadMore = async () => {
        setLoading(true);
        const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Failed to fetch more products');
        }
        const newProducts = await res.json();
        setData(prevData => [...prevData, ...newProducts]);
        setOffset(prevOffset => prevOffset + 10);
        setLoading(false);
    };

    return (
        <div className="w-full container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {data.map(product => (
                    <div key={product.id}>
                        <Card
                            image={product.images[0]}
                            title={product.title}
                            price={product.price}
                            category={product.category.name}
                        />
                    </div>
                ))}
            </div>
            {hasMoreProducts ? (
                <div className="flex justify-center">
                    <Button onClick={loadMore} disabled={loading}>
                        {loading ? 'Loading...' : 'Load More'}
                    </Button>
                </div>
            ) : null}
        </div>
    );
};

export default ProductsPage;