import React from 'react';
import classes from "./SortingButtons.module.css"; // можно создать отдельные стили

const SortingButtons = ({ onSort }) => {
    return (
        <div className={classes.sortBtnPosition}>
            <button
                className={classes.sortBtn}
                onClick={() => onSort('name-asc')}>
                По от А до Я
            </button>
            <button
                className={classes.sortBtn}
                onClick={() => onSort('price-asc')}>
                По возрастанию цены
            </button>
            <button
                className={classes.sortBtn}
                onClick={() => onSort('price-desc')}>
                По убыванию цены
            </button>
            <button
                className={classes.sortBtn}
                onClick={() => onSort('original')}
                style={{backgroundColor: '#f0f0f0', color: '#333'}}>
                По умолчанию
            </button>
        </div>
    );
};

export default SortingButtons;