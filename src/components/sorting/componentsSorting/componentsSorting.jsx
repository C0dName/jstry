import React from 'react';
import classes from "./componentsSorting.module.css";

const ProductForm = ({products, onRemove}) => {
    return (
        <div style={{marginTop: '10px'}}>
            {products.map((product) =>
                <div className={classes.productGlobal}
                     key={product.id}>
                    <div className={classes.productItem}>
                        <p style={{marginRight: '5px'}}>№ {product.id}.</p>
                        <p>{product.name}:</p>
                        <p style={{marginLeft: '5px'}}>{product.price} р.</p>
                    </div>
                    <div className={classes.productBtnPosition}>
                        <button onClick={() => onRemove(product.id)}
                                className={classes.productBtn}>
                            Удалить
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductForm;