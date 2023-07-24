import axios from 'axios'
import React, { useState } from 'react'
import { Link,useNavigate  } from 'react-router-dom'


export default function NavBar() {

    let authToken = localStorage.getItem('authToken')
    console.log("this is authtoken-->",authToken);
    const navigate = useNavigate();

    const logout = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8080/logout/${authToken}`)
        .then(response => {
           
        }).catch (error => {
            console.log("error in loging out");
        })
        localStorage.clear();
        navigate('/')
        
    }
    return (
        <div>
            <nav class="navbar  bg-primary-subtle border border-primary-subtle rounded-3 ">
                <div class="container-fluid">
                    <a class="navbar-brand">JobHunt</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn  me-2 btn-outline-primary" type="submit">Search</button>
                            <button onClick={logout} class="btn btn-outline-primary" type="submit">Logout</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}