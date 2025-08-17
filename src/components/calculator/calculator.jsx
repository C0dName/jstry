import React, { useState } from 'react';
import classes from "./calculator.module.css";


const Calculator = () => {
const [calc, setCalc] = useState(0);
const [value, setValue] = useState('введите число');
const [value1, setValue1] = useState('введите число');
const [fun, setFun] = useState('');

function plus () {
    setCalc(Number(value) + Number(value1));
    setFun('+')

}
function minus () {
    setCalc(Number(value) - Number(value1));
    setFun('-')
}

    return (
        <div className={classes.calculatorGlobal}>
            <div className={classes.usl}>
                <p>{value}</p>
                <p>{fun}</p>
                <p>{value1}</p>
                <p>=</p>
                <h1>{calc}</h1>
            </div>
            <input
                    value={value}
                    onChange={(e) =>
                    {setValue(e.target.value)}}
                    type="number"
            />
            <input
                value={value1}
                onChange={(e) =>
                {setValue1(e.target.value)}}
                type="number"
            />
            <div className={classes.btnBlock}>
                <button
                    className={classes.btn}
                    onClick={plus}>+</button>
                <button
                    className={classes.btn}
                    onClick={minus}>-</button>
            </div>
            {/*<h2>{result}</h2>*/}
        </div>
    );
};

export default Calculator;