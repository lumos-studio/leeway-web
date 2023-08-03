import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';



function AuthPage() {
    const navigate = useNavigate();
    const handleAppleButtonClick = () => {
        navigate('/home');
    };

    const {googleSignIn,user} =UserAuth();

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        }catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (user !=null){
            navigate('/home');
        }
    },[user]);
  
      
    return (
        <div className='auth'>
            <div className='authentication'>
                <section className='leeway-icon'>
                    <img src='icon.svg'></img>
                    <img src='leeway.svg'></img>
                </section>
                <section className='auth-content'>
                    <p>continue with</p>
                    <div className='authentication-option'>
                        <button className='ios' onClick={handleAppleButtonClick}><img src='ios.svg'></img></button>
                        <button className='google' onClick={handleGoogleSignIn}><img src='google.svg'></img></button>
                    </div>
                    <p className='terms'>by continuing, you agree to our&nbsp;<Link to='#' className='terms-condition'>terms & conditions</Link></p>
                </section>
            </div>
        </div>
    );
}

export default AuthPage;

