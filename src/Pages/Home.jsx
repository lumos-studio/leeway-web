import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/Transaction")
    }
    return (
        <div class="home">
            <h1>leeway</h1>
            <div class="ip">
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
            <div className="btn"><button className="add" onClick={handleClick}><img src="addbutton.svg"></img></button></div>
        </div >

    )
}
export default Home

