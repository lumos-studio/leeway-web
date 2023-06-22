import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Home() {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
        setTransactions(storedTransactions);
    }, []);
    function handleClick() {
        navigate("/transaction")
    }
    function formatDate(dateString) {
        const options = { month: 'short', day: '2-digit', year: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div class="home">
            <h1>leeway</h1>
            <p>Transactions</p>
            <div className="data">
                {transactions.map((item, index) => (
                    <div key={index} className="list">
                        <div className="list-item rs">₹ {item.amount}</div>
                        <div className="list-item rspl">{item.unitPrice} ₹/l</div>
                        <div className="list-item ltr">{item.litres} Ltr</div>
                        <div className="list-item dt">{formatDate(item.date)}</div>
                    </div>
                ))}

            </div>

            <div className="btn"><button className="add" onClick={handleClick}><img src="addbutton.svg"></img></button></div>
        </div >

    )
}
export default Home



