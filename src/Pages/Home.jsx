import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const data = [
        {
            id: 1,
            amount: '500 ₹',
            amountperlitre: '105.43₹/l',
            litres: '4.3 Ltr',
            date: '12/02/2023 - 4:21 PM(42,312KM)',
        },
        {
            id: 2,
            amount: '600 ₹',
            amountperlitre: '105.43₹/l',
            litres: '4.3 Ltr',
            date: '12/02/2023 - 4:21 PM(42,312KM)',
        },
    ];

    function handleClick() {
        navigate("/transaction")
    }
    return (
        <div class="home">
            <h1>leeway</h1>
            {/* <section class="data">
                <div class="data1">
                    <p>500 ₹</p>
                    <p>105.43₹/l</p>
                    <p>4.3 Ltr</p>
                    <p>12/02/2023 - 4:21 PM(42,312KM)</p>
                </div>
                <div class="data2">
                    <p class="rupees">500 ₹</p>
                    <p class="rupeesl">105.43₹/l</p>
                    <p class="ltr">4.3 Ltr</p>
                    <p class="date">12/02/2023 - 4:21 PM(42,312KM)</p>
                </div>
            </section> */}
            <div className="data">
                {data.map(item => (
                    <div key={item.id} className="list">
                        <div className="list-item rs">{item.amount}</div>
                        <div className="list-item rspl">{item.amountperlitre}</div>
                        <div className="list-item ltr">{item.litres}</div>
                        <div className="list-item dt">{item.date}</div>
                    </div>
                ))}

            </div>

            <div className="btn"><button className="add" onClick={handleClick}><img src="addbutton.svg"></img></button></div>
        </div >

    )
}
export default Home




