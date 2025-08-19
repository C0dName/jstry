import { useState, useRef } from 'react';

export const useSorting = (initialProducts) => {
    const [products, setProducts] = useState(initialProducts);
    const [sortType, setSortType] = useState('none');

    // Сохраняем исходный порядок с useRef
    const originalOrderRef = useRef(initialProducts.map((product, index) => ({
        ...product,
        originalIndex: index
    })));

    // Функция для сортировки продуктов
    const sortProducts = (type) => {
        let sortedProducts = [...products];

        switch(type) {
            case 'name-asc':
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'price-asc':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'original':
                // Возврат к исходному порядку
                sortedProducts = [...originalOrderRef.current]
                    .sort((a, b) => a.originalIndex - b.originalIndex)
                    .map(({ originalIndex, ...product }) => product);
                break;
            default:
                // Без сортировки
                break;
        }

        setProducts(sortedProducts);
        setSortType(type);
    };

    // Добавление нового продукта
    const addProduct = (name, price) => {
        if (!name.trim() || !price.trim()) return;

        const maxId = products.length > 0 ? Math.max(...products.map(product => product.id)) : 0;
        const newProduct = {
            id: maxId + 1,
            name,
            price: parseInt(price),
            originalIndex: products.length // Добавляем оригинальный индекс
        };

        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);

        // Обновляем оригинальный порядок
        originalOrderRef.current = updatedProducts.map((product, index) => ({
            ...product,
            originalIndex: index
        }));
    };

    // Удаление продукта
    const removeProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);

        // Обновляем оригинальный порядок
        originalOrderRef.current = updatedProducts.map((product, index) => ({
            ...product,
            originalIndex: index
        }));
    };

    return {
        products,
        sortType,
        sortProducts,
        addProduct,
        removeProduct
    };
};