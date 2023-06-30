import React from 'react'
import Product from './Product'

export default function ProductList(props) {
    console.log(props)
    return (
        props.productList.map((product) => {
            return <Product product={product} />
        })
    )
}
