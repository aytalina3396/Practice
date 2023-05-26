import React from 'react';
import ProductItem from './ProductItem';
import products from '../data/p.json';
import { Container, Row } from 'react-bootstrap';


const Products = () => {
    return (
    <Container>
    <Row>
    {products.map(({ id, title, thumbnail, price, description, brand }) => (
    <ProductItem
    key={id}
    title={title}
    img={thumbnail}
    price={price}
    brand={brand}
    description={description}
    />
    ))}
    </Row>
    </Container>
    );
    };
    
    export default Products;