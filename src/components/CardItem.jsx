// acá van las cards de los productos

import React from 'react'

const Item = ({itemData}) => {
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={itemData.pictureUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{itemData.title}</h2>
                <p>Price: {itemData.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default Item