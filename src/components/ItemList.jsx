import React from 'react';
import CardItem from './CardItem.jsx';

const ItemList = (props) => {
    
    return (
    <>
    {props.estado.map(prod => <CardItem key={prod.id} itemData={prod}/>) }
    </>
  
  )
}

export default ItemList