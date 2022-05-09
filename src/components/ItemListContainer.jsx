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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <ItemList estado={productos} />
          </div>
        </div>
      </section>
    </>
  )


}

export default ItemListContainer
