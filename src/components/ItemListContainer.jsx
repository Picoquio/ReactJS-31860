import React from 'react'
import ItemList from './ItemList'
import { useState } from 'react'
import { useEffect } from 'react'
import { products as productsData } from "../data/dataItems.js";

const ItemListContainer = () => {

  const [productos, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData)

      }, 2000);
    })

    getProducts.then((result) => {
      setProducts(result)
      console.log(result)
    })
  }, []);



  return (
    <>
      <ItemList estado={productos} />
    </>
  )


}

export default ItemListContainer
