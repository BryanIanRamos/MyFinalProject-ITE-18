import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import './Product.css'

const Product = ({ product }) => {
    const image = product.attributes.images.data[0].attributes;

    return (
        
            <Card className="product-card">
                    <CardImg
                        className="card-image"
                        top
                        height={'300px'}
                        width={'300px'}
                        src={`http://localhost:1337${image.url}`}
                        alt={image.name}
                    />

                    <CardBody>
                        <CardTitle className="card-title">{product.attributes.name}</CardTitle>
                        <CardSubtitle>
                            <h3 className="card-desc">{product.attributes.description}</h3>
                            <strong className="card-price">Price: ${product.attributes.price}</strong>
                        </CardSubtitle>
                    </CardBody>
         </Card>
        
    );
};

export default Product;
