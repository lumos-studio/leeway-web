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


    useEffect(() => {
        if (amount.trim() !== '' && unitPrice.trim() !== '') {
            const calculatedLitres = parseFloat(amount) / parseFloat(unitPrice);
            setLitres(calculatedLitres.toString());
        } else if (amount.trim() !== '' && litres.trim() !== '') {
            const calculatedUnitPrice = parseFloat(amount) / parseFloat(litres);
            setUnitPrice(calculatedUnitPrice.toString());
        } else if (unitPrice.trim() !== '' && litres.trim() !== '') {
            const calculatedAmount = parseFloat(unitPrice) * parseFloat(litres);
            setAmount(calculatedAmount.toString());
        }
    }, [amount, unitPrice, litres]);



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
            navigate("/Home");
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
                <input type="number" placeholder="amount" value={amount} onChange={(e) => handleInputChange(e, setAmount)} />
                <input type="number" placeholder="unit price" value={unitPrice} onChange={(e) => handleInputChange(e, setUnitPrice)} />
                <input type="number" placeholder="litres" value={litres} onChange={(e) => handleInputChange(e, setLitres)} />
                <input type="date" placeholder="date" value={date} onChange={(e) => handleInputChange(e, setDate)} />
            </div>
            <div className="tickbtn"><button class="tick" onClick={handleTickClick}><img src="savebutton.svg"></img></button></div>
        </div>
    )
}
export default Transaction




