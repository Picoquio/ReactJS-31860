import React from 'react'
import ItemList from './ItemList'
import { useState } from 'react'
import { useEffect } from 'react'
import { products as productsData } from "../data/dataItems.js";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const { categoryId } = useParams()



  const [productos, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData)

      }, 2000);
    })

    getProducts.then((result) => {

      // console.log('aca va la categoria')
      // console.log(categoryId)

      // console.log('acá va el valor de la categoría del primer objeto del array')
      // console.log(result[1].category)

      // console.log('aca va el result')
      // console.log(result)
      if (categoryId) {
        const encontra = result.filter(item => item.category == categoryId)
        console.log('Aca va el encontrado')
        console.log(encontra)
        setProducts(encontra)
      }
      else {
        setProducts(result)
        console.log(result)
      }












    })
  }, [categoryId]);



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
