import React, { useState } from 'react'
import { products } from '../data/dataItems'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const { id } = useParams()

    const [item, setItem] = useState([])

    useEffect(() => {

        const getProductDetail = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(p => p.id == id))
            }, 2000);

        })

        getProductDetail.then((result) => {
            setItem(result)
        })

    }, [])

    return (
        <>
            <div>ItemDetailContainer {id}</div>
            <ItemDetail estado={item}></ItemDetail>
        </>

    )
}

export default ItemDetailContainer