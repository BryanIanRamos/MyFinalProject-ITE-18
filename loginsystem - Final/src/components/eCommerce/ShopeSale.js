import React, {ScrollView} from 'react';
import { useProducts } from "./useProducts.js";
import { Row, Col } from "reactstrap";
import Product from './Product.js';
import './Product.css'
import { Scrollbars } from 'react-custom-scrollbars';
import Line from '../images/Extra.png';

const ShopeSale = () => {
    const { categories, products } = useProducts();

    console.log({ categories });
    console.log({ products });

    return (
        <>
        <div className='store-main'>
            <h2 className="header-title-store" style={{ textAlign: "center" }}> Check our finest Cakes</h2>
            <img className='header-image-store' src={Line} />
            {
                categories.length && categories.map((category) => {
                    const hasProducts = products.filter(
                        (product) => product.attributes.category.data.id === category.id
                    );
                    
                    return hasProducts && hasProducts.length ? (
                        
                        
                            <div className='store-card-content'>
                                <h2 className='category-title'>{category.attributes.name}
                                    <div className="extra-box"></div>
                                </h2>
                                <div className='container-category-description'>
                                 <p className='category-description'>{category.attributes.description}</p>
                                </div>
                               
                                <div style={{ height: '700px', width: '90%', marginTop: '40px', boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)', marginLeft: '5%'}}>
                                <Scrollbars>
                                    <div className="card-container-main">
                                        <Row key={category.id}>
                                            {hasProducts.map((product) => (
                                                <Col key={product.id}>
                                                    <Product product={product} />
                                                </Col>
                                            ))}
                                        </Row>
                                        
                                    </div>
                                    </Scrollbars>
                            </div>
                        
                        </div>
                    ) : null;
                })
            }
        </div>
        </>
    );
};

export default ShopeSale;
