// acá van las cards de los productos

import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ itemData }) => {
    return (
        <>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to={`/item/${itemData.id}`} className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={itemData.pictureUrl} />
                </Link>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{itemData.category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{itemData.title}</h2>
                    <p className="mt-1">${itemData.price}</p>
                </div>
            </div>

        </>

    )
}

export default Item