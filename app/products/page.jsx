import ProductsPage from "../_components/ProductsPage";

const fetchProducts = async (offset) => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
};

const fetchTotalProducts = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products', {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Failed to fetch total products');
    }
    return res.json();
};

const Products = async () => {
    const initialProducts = await fetchProducts(0);
    const totalProducts = await fetchTotalProducts();
    return (
        <div className="py-8">
            <h1 className="text-2xl font-bold text-center my-4">Products</h1>
            <ProductsPage initialProducts={initialProducts} totalProducts={totalProducts.length} />
        </div>
    );
};

export default Products;