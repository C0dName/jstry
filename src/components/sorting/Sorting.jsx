import React, {useState} from 'react';
import classes from "../sorting/Sorting.module.css";
import ProductForm from "./componentsSorting/componentsSorting";
import SortingButtons from "./componentsSorting/SortingButtons";
import { useSorting } from "./hooks/useSorting";

const Sorting = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const {
        products,
        sortProducts,
        addProduct,
        removeProduct
    } = useSorting([
        {id: 1, name: 'Ротфронт', price: 450},
        {id: 2, name: 'Творожные пряники', price: 300},
        {id: 3, name: 'Азерчай', price: 80},
    ]);

    const handleAddProduct = () => {
        addProduct(name, price);
        setName('');
        setPrice('');
    };

    return (
        <div className={classes.productGlobal}>
            <h1>Список товара</h1>
            <div className={classes.inputGlobal}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={classes.inputEnter}
                    type="text"
                    placeholder='Название'/>
                <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className={classes.inputEnter}
                    type="number"
                    placeholder='Цена'/>
                <button
                    onClick={handleAddProduct}
                    style={{
                        width: '100px',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>
                    Добавить
                </button>

                <SortingButtons onSort={sortProducts} />
            </div>
            <div className={classes.productItems}>
                <ProductForm
                    products={products}
                    onRemove={removeProduct}
                />
            </div>
        </div>
    );
};

export default Sorting;