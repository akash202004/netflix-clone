import React, { useState } from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);

    return <div className='loginScreen'>
        <div className="loginScreen__background">
            <img
                className='loginScreen__logo'
                src="https://imgs.search.brave.com/o_Qfx8kjPHmgW0HIEMncXFwKp9f3nxAjtmPl3sBE9lU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmZseGV4dC5j/b20vZmZlL3NpdGV1/aS9hY3F1aXNpdGlv/bi9ob21lL25mbHhs/b2dvLnBuZw"
                alt="Logo"
            />
            <button
                onClick={() => setSignIn(true)}
                className='loginScreen__button'>
                sign In
            </button>
            <div className="loginScreen__gradient"></div>

            <div className="loginScreen__body">
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <>
                        <h1>Unlimited Films, TV Programmes and more.</h1>
                        <h2>Watch anywhere, Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className="loginScreen__input">
                            <form>
                                <input
                                    type="email"
                                    placeholder='Email Adress..'
                                />
                                <button
                                    onClick={() => setSignIn(true)}
                                    className='loginScreen__getStarted'>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
}

export default LoginScreen
