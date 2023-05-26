import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../store/index';

const ProductItem = ({ id, title, thumbnail, price, description, brand }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    // Проверяет, находится ли продукт в корзине
    const isInCart = cart.some((product) => product.id === id);

    // Добавляет продукт в корзину
    const handleAddToCart = () => {
      dispatch(addToCart({  id, title, thumbnail, price, description, brand }));
    };

    // Удаляет продукт из корзины
    const handleRemoveFromCart = () => {
      dispatch(removeFromCart({ id }));
    };

    return (
      <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={thumbnail} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{brand}</Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{price} $.</Card.Text>
              {isInCart ? (
                <Button variant='danger' onClick={handleRemoveFromCart}>
                  Удалить из корзины
                </Button>
              ) : (
                <Button variant='success' onClick={handleAddToCart}>
                  Добавить в корзину
                </Button>
              )}
            </Card.Body>
          </Card>
    );
  };

export default ProductItem;