import React from "react";
import { useNavigate } from "react-router-dom";
function Transaction() {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/Home")
    }
    return (
        <div class="next">
            <h1>fuel expense</h1>
            <div class="transaction-ip">
                <input type="text" placeholder="current km" />
                <input type="text" placeholder="amount" />
                <input type="text" placeholder="unit price" />
                <input type="text" placeholder="litres" />
                <input type="text" placeholder="date" />
            </div>
            <div className="tickbtn"><button class="tick" onClick={handleClick}><img src="savebutton.svg"></img></button></div>
        </div>
    )
}
export default Transaction

