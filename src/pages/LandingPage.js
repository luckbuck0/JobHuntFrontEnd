import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function LandingPage() {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    })

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    })

    const { firstname, lastname, email, password, role } = user
    const {em,pass} = userLogin
    const [token, setToken] = useState()
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onLoginChange = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/auth/register", user)
            .then(response => {
                console.log("this is the token-->", response.data.token);
                localStorage.setItem('authToken', response.data.token);
                navigate('/home')
            }).catch(error => {
                console.log("error registering");
            })

    }



    const onSubmitLogin = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/auth/authenticate", userLogin)
            .then(response => {
                console.log("this is the token-->", response.data.token);
                localStorage.setItem('authToken', response.data.token);
                navigate('/home')
            }).catch(error => {
                console.log("error logging in");
            })

    }

    return (
        <div className='container'>
               <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2>Authentication</h2>
                </div>
                <div>
            <form onSubmit={(e) => onSubmit(e)} class="d-inline-block row gx-3 gy-2 w-200 align-items-center">
                <div class="col-sm-8">
                    <label class="visually-hidden" for="specificSizeInputName">First Name</label>
                    <input
                        type="text"
                        class="form-control" id="specificSizeInputName"
                        className='form-control mt-5'
                        placeholder='first name'
                        name='firstname'
                        value={firstname}
                        onChange={(e) => onInputChange(e)} />
                </div>
                <div class="col-sm-8">
                    <label class="visually-hidden" for="specificSizeInputName">Last Name</label>
                    <input
                        type="text"
                        class="form-control" id="specificSizeInputName"
                        className='form-control'
                        placeholder='last name'
                        name='lastname'
                        value={lastname}
                        onChange={(e) => onInputChange(e)} />
                </div>
                <div class="col-sm-8">
                    <label class="visually-hidden" for="specificSizeInputGroupUsername">Email</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input
                            type="text"
                            class="form-control" id="specificSizeInputGroupUsername"
                            className='form-control'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                </div>
                <div class="col-sm-8">
                    <label class="visually-hidden" for="specificSizeInputName">First Name</label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder='password'
                        name='password'
                        value={password}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div class="col-auto">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
                        <label class="form-check-label" for="autoSizingCheck2">
                            Remember me
                        </label>
                    </div>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
            
            <form onSubmit={(e) => onSubmitLogin(e)} class="d-inline-block row gx-3 gy-2 w-200 align-items-center">
             
                <div class="col-sm-8">
                    <label class="visually-hidden" for="specificSizeInputGroupUsername">Email</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input
                            type="text"
                            class="form-control" id="specificSizeInputGroupUsername"
                            className='form-control'
                            placeholder='Email'
                            name='email'
                            value={em}
                            onChange={(e) => onLoginChange(e)}
                        />
                    </div>
                </div>
                <div class="col-sm-8">
                    <label class="visually-hidden" for="specificSizeInputName">Password</label>
                    <input
                        type={"text"}
                        class="form-control" id="specificSizeInputGroupUsername"
                        className='form-control'
                        placeholder='password'
                        name='password'
                        value={pass}
                        onChange={(e) => onLoginChange(e)}
                    />
                </div>
                <div class="col-auto">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
                        <label class="form-check-label" for="autoSizingCheck2">
                            Remember me
                        </label>
                    </div>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>

            </div>
            
        </div>
    )
}