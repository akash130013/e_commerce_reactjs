import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../action/index'
import { Dimmer, Loader, Image, Segment, Grid } from 'semantic-ui-react'
import ProductItem from './ProductItem'


class ProductContainer extends Component {

    componentDidMount() {
        this.props.fetchProduct();
    }

    render() {


        if (this.props.products.length == 0) {
            return <Segment>
                <Dimmer active>
                    <Loader />
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
        }

        return (
            <>
                 <Grid columns={3}>
                      {this.props.products.map(function (product, index) {
                          return <ProductItem product={product} key={index} />
                      })}

                </Grid>

            </>
        )
    }
}



const mapStateToProps = (state) => {
    const products = state.products

    return { products };
}

export default connect(mapStateToProps, { fetchProduct })(ProductContainer)