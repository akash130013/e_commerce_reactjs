import React from 'react'

import { Card, Grid, Icon, Image } from 'semantic-ui-react'
import ProductButton from './ProductButton'
import ShowMoreText from 'react-show-more-text';

export default function ProductItem({ product, handleCart }) {

    const { id, title, price, description, image,category } = product

    const extra = (
        <ProductButton price={price} handleCart={handleCart} id={id} />
    )

    const showMore = (
        <ShowMoreText
            /* Default options */
            lines={3}
            more='Show more'
            less='Show less'
            className='content-css'
            anchorClass='my-anchor-css-class'
            expanded={false}
            width={280}
        >
           {description}
        </ShowMoreText>

    )

    return (

        <Grid.Column>

            <Card
                image={image}
                header={title}
                meta={category}
                description={showMore}
                extra={extra}
            />
        </Grid.Column>

    )
}
