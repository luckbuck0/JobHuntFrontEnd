import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function LandingPage() {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstname: "",
        lastname:"",
        email: "",
        password: ""
    })

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    })

    const { firstname,lastname, email, password } = user
    const { em, pass } = userLogin
   
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onLoginChange = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        await axios.post("http://localhost:8080/api/auth/register", user)
            .then(response => {
                console.log("this is the token-->", response.data.token);
                localStorage.setItem('authToken', response.data.token);
                navigate('/home')
            }).catch(error => {
                console.log("error registering");
            })

    }

    const [clicked,setClicked] = useState(false)

    const hasClicked = () => {
        setClicked(true)
        signUpOrRegister()
    }

    const hasUnClicked = () => {
        setClicked(false)
        signUpOrRegister()
    }

    const signUpOrRegister = () => {
        if(clicked){
            return(
                <form onSubmit={(e) => onSubmit(e)}>

                <div class="mb-2">
                  <i class="fas fa-cubes fa-2x me-3 color: #ff6219;"></i>
                  <span class="h1 fw-bold mb-0 ">JobHunt</span>
                </div>
            <div>
            <h5 class="fw-normal mb-3 pb-3 letter-spacing: 1px;" >Register</h5>

           

            <div class="form-outline mb-2">
              <input 
              type="first name" 
              id="form2Example27" 
              class="form-control form-control-md" 
              placeholder='First Name'
              name='firstname'
              value={firstname}
              onChange={(e) => onInputChange(e)} 
              />
              <label class="form-label" for="form2Example27">First Name</label>
            </div>

            <div class="form-outline mb-2">
              <input 
              type="last name" 
              id="form2Example27" 
              class="form-control form-control-md" 
              placeholder='Last Name'
              name='lastname'
              value={lastname}
              onChange={(e) => onInputChange(e)} 
              />
              <label class="form-label" for="form2Example27">Last Name</label>
            </div>

            <div class="form-outline mb-2">
              <input 
              type="email" 
              id="form2Example27" 
              class="form-control form-control-md" 
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onInputChange(e)}
              />
              <label class="form-label" for="form2Example27">Email Address</label>
            </div>

            <div class="form-outline mb-2">
              <input 
              type="password" 
              id="form2Example27" 
              class="form-control form-control-md" 
              className='form-control'
              placeholder='password'
              name='password'
              value={password}
              onChange={(e) => onInputChange(e)}
              />
              <label class="form-label" for="form2Example27">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-dark btn-lg btn-block" type="submit">Register</button>
            </div>
            </div>
            <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2 color: #393f81;">have an account? <a href="#!"
                      className="color: #393f81;" onClick={hasUnClicked}>Sign In</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>
            )
        } else{
            return(
                <form onSubmit={(e) => onSubmitLogin(e)}>

                <div class="mb-2">
                  <i class="fas fa-cubes fa-2x me-3 color: #ff6219;"></i>
                  <span class="h1 fw-bold mb-0 ">JobHunt</span>
                </div>
            <div>
            <h5 class="fw-normal mb-3 pb-3 letter-spacing: 1px;" >Sign into your account</h5>

            <div class="form-outline mb-4">
              <input 
              type="email" 
              id="form2Example17" 
              class="form-control form-control-lg "
              placeholder='Email'
              name='email'
              value={em}
              onChange={(e) => onLoginChange(e)}                       
              />
              <label class="form-label" for="form2Example17">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <input 
              type="password" 
              id="form2Example27" 
              class="form-control form-control-lg" 
              placeholder='password'
              name='password'
              value={pass}
              onChange={(e) => onLoginChange(e)}                 
              />
              <label class="form-label" for="form2Example27">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
            </div>
            </div>
            <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2 color: #393f81;">Don't have an account? <a href="#!"
                      className="color: #393f81;" onClick={hasClicked}>Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>
            )
        }
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
        <section class="vh-100 bg-light" >
  <div class="container py-2 h-100">
    <div class="row d-flex justify-content-center align-items-center h-80">
      <div class="col col-xl-10">
        <div class="card border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://i.pinimg.com/564x/28/01/f8/2801f8277940e0e67ebac223b8920565.jpg"
                alt="login form" class="img-fluid border-radius: 1rem 0 0 1rem;"  />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                 {signUpOrRegister()}

                 

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    )
}

  // <div className=' d-flex'>
        //     <div class="card text-bg-primary " >
        //         <div class="card-header">Header</div>
        //         <div class="card-body">
        //             <h5 class="card-title">Info card title</h5>
        //             <div className=''></div>
        //         </div>
                
        //     </div>
            
        //     <div>
                
        //         <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        //             <h2>Authentication</h2>
        //         </div>
        //         <div>
        //             <form onSubmit={(e) => onSubmit(e)} class="d-inline-block row gx-3 gy-2 w-200 align-items-center">
        //                 <div class="col-sm-8">
        //                     <label class="visually-hidden" for="specificSizeInputName">First Name</label>
        //                     <input
        //                         type="text"
        //                         class="form-control" id="specificSizeInputName"
        //                         className='form-control mt-5'
        //                         placeholder='first name'
        //                         name='firstname'
        //                         value={firstname}
        //                         onChange={(e) => onInputChange(e)} />
        //                 </div>
        //                 <div class="col-sm-8">
        //                     <label class="visually-hidden" for="specificSizeInputName">Last Name</label>
        //                     <input
        //                         type="text"
        //                         class="form-control" id="specificSizeInputName"
        //                         className='form-control'
        //                         placeholder='last name'
        //                         name='lastname'
        //                         value={lastname}
        //                         onChange={(e) => onInputChange(e)} />
        //                 </div>
        //                 <div class="col-sm-8">
        //                     <label class="visually-hidden" for="specificSizeInputGroupUsername">Email</label>
        //                     <div class="input-group">
        //                         <div class="input-group-text">@</div>
        //                         <input
                                    // type="text"
                                    // class="form-control" id="specificSizeInputGroupUsername"
                                    // className='form-control'
                                    // placeholder='Email'
                                    // name='email'
                                    // value={email}
                                    // onChange={(e) => onInputChange(e)}
        //                         />
        //                     </div>
        //                 </div>
        //                 <div class="col-sm-8">
        //                     <label class="visually-hidden" for="specificSizeInputName">First Name</label>
        //                     <input
                                // type={"text"}
                                // className='form-control'
                                // placeholder='password'
                                // name='password'
                                // value={password}
                                // onChange={(e) => onInputChange(e)}
        //                     />
        //                 </div>
        //                 <div class="col-auto">
        //                     <div class="form-check">
        //                         <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
        //                         <label class="form-check-label" for="autoSizingCheck2">
        //                             Remember me
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div class="col-auto">
        //                     <button type="submit" class="btn btn-primary">Submit</button>
        //                 </div>
        //             </form>

        //             <form onSubmit={(e) => onSubmitLogin(e)} class="d-inline-block row gx-3 gy-2 w-200 align-items-center">

        //                 <div class="col-sm-8">
        //                     <label class="visually-hidden" for="specificSizeInputGroupUsername">Email</label>
        //                     <div class="input-group">
        //                         <div class="input-group-text">@</div>
        //                         <input
        //                             type="text"
        //                             class="form-control" id="specificSizeInputGroupUsername"
        //                             className='form-control'
        //                             placeholder='Email'
        //                             name='email'
        //                             value={em}
        //                             onChange={(e) => onLoginChange(e)}
        //                         />
        //                     </div>
        //                 </div>
        //                 <div class="col-sm-8">
        //                     <label class="visually-hidden" for="specificSizeInputName">Password</label>
        //                     <input
        //                         type={"text"}
        //                         class="form-control" id="specificSizeInputGroupUsername"
        //                         className='form-control'
        //                         placeholder='password'
        //                         name='password'
        //                         value={pass}
        //                         onChange={(e) => onLoginChange(e)}
        //                     />
        //                 </div>
        //                 <div class="col-auto">
        //                     <div class="form-check">
        //                         <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
        //                         <label class="form-check-label" for="autoSizingCheck2">
        //                             Remember me
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div class="col-auto">
        //                     <button type="submit" class="btn btn-primary">Submit</button>
        //                 </div>
        //             </form>

        //         </div>
        //     </div>
        //     <div>

        //     </div>
            
        // </div>