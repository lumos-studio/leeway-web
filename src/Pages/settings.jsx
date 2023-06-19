import { useNavigate, Link } from 'react-router-dom';
import React from 'react';

function Settings() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/Home");
    };




    return (
        <div className="settings">
            <h1><button className="back" onClick={handleBackClick}><img src="back.svg"></img></button>settings</h1>
            <section>
                <div className='settings-option'>
                    <div>distance unit</div>
                    <div>kilo meter(km)</div>
                </div>
                <div className='settings-option'>
                    <div>quantity unit</div>
                    <div>litre(l)</div>
                </div>
                <div className='settings-option'>
                    <div>currency</div>
                    <div>rupee(₹)</div>
                </div>
            </section>
            <div className='t-c-signout'>
                <Link to='#' className='terms-conditions'>terms & conditions</Link>
                <button className='signout'>sign out</button>
            </div>
        </div>
    );
}

export default Settings;

