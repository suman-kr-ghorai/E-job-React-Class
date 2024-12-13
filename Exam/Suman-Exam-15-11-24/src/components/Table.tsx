import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    title: string;
    price: number;
    brand: string;
    dimensions: { width: number; height: number; depth: number };
    thumbnail: string;
    images: string[];
}

const Table: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((response) => {
                const data = response.data.products; 
                setProducts(data);
            }).catch(error => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0">Product List</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped table-bordered table-sm">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Brand</th>
                                    <th>Dimensions</th>
                                    <th>Images</th>
                                    <th>Thumbnail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>$ {product.price.toFixed(2)}</td>
                                        <td>{product.brand}</td>
                                        <td>
                                            Width: {product.dimensions?.width} cm, 
                                            Height: {product.dimensions?.height} cm, 
                                            Depth: {product.dimensions?.depth} cm
                                        </td>
                                        <td>
                                            {product.images.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt={`${product.title} image ${index + 1}`}
                                                    className="img-fluid rounded-circle me-2"
                                                    style={{ width: '60px', height: '60px' }}
                                                />
                                            ))}
                                        </td>
                                        <td>
                                            <img
                                                src={product.thumbnail}
                                                alt={product.title}
                                                className="img-fluid rounded-circle"
                                                style={{ width: '120px', height: '120px' }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
