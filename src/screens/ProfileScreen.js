import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                        src="https://imgs.search.brave.com/aU6CeYBb4NgwoFxaVOrM96ESHutGwLRthGVpbClZjzk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLTJm/ZzkzZnVuaXB2cWZz/OWkuanBn" alt="avatar png"
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans (Current Plans: Premium)</h3>
                            <div className="basic plans__options">
                                <h1>Basic</h1>
                                <button className='subscribe'>Subscribe</button>
                            </div>
                            <div className="standard plans__options">
                                <h1>Standard</h1>
                                <button className='subscribe'>Subscribe</button>
                            </div>
                            <div className="premium plans__options">
                                <h1>Premium</h1>
                                <button className='subscribe subscribed__button'>Current Package</button>
                            </div>
                            <button
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen