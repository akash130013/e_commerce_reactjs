import React from 'react'

import { Card, Grid, Icon, Image } from 'semantic-ui-react'
import ProductButton from './ProductButton'

export default function ProductItem({ product,handleCart }) {

    const { id, title, price, description, image } = product

    const extra = (
        <ProductButton price={price} handleCart={handleCart} id={id} />
     )

    return (

        <Grid.Column>
          
            <Card
                image={image}
                header={title}
                meta='Description'
                description={description}
                extra={extra}

            />
        </Grid.Column>

    )
}
