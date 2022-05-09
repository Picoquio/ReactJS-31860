import React from 'react'

const ItemDetail = ({estado}) => {
  console.log(estado.id)
    return (
    <div className="container">
        <div className="row">
            <div className="col">
                <img src={estado.pictureUrl} alt="" />
            </div>
            <div className="col">
                <h1>{estado.title}</h1>
                <h3>Precio: {estado.price}</h3>
                <h1>jjdsj</h1>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail