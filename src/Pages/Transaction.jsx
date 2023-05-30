import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
function Transaction() {

    const navigate = useNavigate();
    const [km, setkm] = useState('');

    const handleInputChange = (event) => {
        setkm(event.target.value);
    };
    const handleTickClick = () => {
        if (km.trim() !== '') {
            localStorage.setItem('km', km);
            console.log('Data entered:', km);
            setkm('');
        }

    };

    function handleClick() {
        navigate("/Home")

    }

    return (
        <div class="next">
            <h1>fuel expense</h1>
            <div class="transaction-ip">
                <input type="number" placeholder="current km" value={km} onChange={handleInputChange} />

                <input type="number" placeholder="amount" />
                <input type="number" placeholder="unit price" />
                <input type="number" placeholder="litres" />
                <input type="date" placeholder="date" />
            </div>
            <div className="tickbtn"><button class="tick" onClick={handleTickClick}><img src="savebutton.svg"></img></button></div>
        </div>
    )
}


export default Transaction




