import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
function Transaction() {

    const navigate = useNavigate();
    const [km, setKm] = useState('');
    const [amount, setAmount] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [litres, setLitres] = useState('');
    const [date, setDate] = useState('');

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const formatValue = (value) => {
        if (!isNaN(value)) {
            const roundedValue = parseFloat(value).toFixed(2);
            return roundedValue;
        }
        return value;
    };
    const calculateLitresOrUnitPrice = () => {
        if (amount && unitPrice) {
            const calculatedLitres = amount / unitPrice;
            setLitres(formatValue(calculatedLitres));
        } else if (amount && litres) {
            const calculatedUnitPrice = amount / litres;
            setUnitPrice(formatValue(calculatedUnitPrice));
        } else if (unitPrice && litres) {
            const calculatedAmount = unitPrice * litres;
            setAmount(formatValue(calculatedAmount));
        }
    };
    const handleSecondField = () => {
        calculateLitresOrUnitPrice();
    };
    const handleLitresChange = (event) => {
        const newLitres = event.target.value;
        setLitres(newLitres);
        if (amount && newLitres) {
            const calculatedUnitPrice = amount / newLitres;
            setUnitPrice(formatValue(calculatedUnitPrice));
        }
    };

    const handleTickClick = () => {
        if (km.trim() !== '' && amount.trim() !== '' && unitPrice.trim() !== '' && litres.trim() !== '' && date.trim() !== '') {
            const transactionData = {
                km,
                amount,
                unitPrice,
                litres,
                date
            };
            let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
            transactions.push(transactionData);
            localStorage.setItem('transactions', JSON.stringify(transactions));
            console.log('Data entered:', transactionData);
            setKm('');
            setAmount('');
            setUnitPrice('');
            setLitres('');
            setDate('');
            navigate("/home");
        }
    };
    const handleBackClick = () => {
        navigate("/Home");
    };

    return (
        <div class="next">
            <h1><button className="back" onClick={handleBackClick}><img src="back.svg"></img></button>fuel expense</h1>
            <div class="transaction-ip">
                <input type="number" placeholder="current km" value={km} onChange={(e) => handleInputChange(e, setKm)} />
                <input type="number" placeholder="amount" value={amount} onChange={(e) => handleInputChange(e, setAmount)} onBlur={handleSecondField} />
                <input type="number" placeholder="unit price" value={unitPrice} onChange={(e) => handleInputChange(e, setUnitPrice)} onBlur={handleSecondField} />
                <input type="number" placeholder="litres" value={litres} onChange={handleLitresChange} onBlur={handleSecondField} />
                <input type="date" placeholder="date" value={date} onChange={(e) => handleInputChange(e, setDate)} />
            </div>
            <div className="tickbtn"><button class="tick" onClick={handleTickClick}><img src="savebutton.svg"></img></button></div>
        </div>
    )
}
export default Transaction




