import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NewApp(){
    const navigate = useNavigate()

 const [userId,setUserId]= useState()
 
 console.log("this is userId-->",userId);



 useEffect(() => {
  const fetchUserId = async () => {
    try {
      const userToken = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:8080/api/auth/userid', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      
        setUserId(response.data);
      console.log(response.data);
    
      
    } catch (error) {
      console.error('Error sending GET request:', error);
    }
  };

  fetchUserId(); 
}, []); 

useEffect(() => {
 application.useri=userId
}, [userId]);

  console.log("this is userId-->",userId);
 

    const [application, setApplication] = useState({
        company: "",
        position: "",
        location: "",
        position:"",
        pay: "",
        jobType:"",
        jobDescriptionLink:"",
        active:true,
        useri:null
    })

    

    const { company, position, location, pay, jobType,link } = application
    
  
    const onInputChange = (e) => {
        setApplication({ ...application, [e.target.name]: e.target.value });
    };
   

 const onSubmit = async (e) => {
  e.preventDefault();
  
  console.log(application);
    const userToken= localStorage.getItem('authToken')
    console.log("this is the tokens-->",userToken);
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/archived",
      application,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    console.log("this is the token-->", response.data.token);
    console.log("this is application-->",application);
    navigate('/home')
  } catch (error) {
    console.log("error in post new application");
  }
};
    return (
        <form onSubmit={(e) => onSubmit(e)}>
        <div>
            <h5 class="fw-normal mb-3 pb-3 letter-spacing: 1px;" >New Application</h5>

            <div class="form-outline mb-2">
              <input 
              type="first name" 
              id="form2Example17" 
              class="form-control form-control-md " 
              placeholder='Company'
              name='company'
              value={company}
              onChange={(e) => onInputChange(e)}
              />
              <label class="form-label" for="form2Example17">Company</label>
            </div>

            <div class="form-outline mb-2">
              <input 
              type="position" 
              id="form2Example27" 
              class="form-control form-control-md" 
              placeholder='Postion'
              name='position'
              value={position}
              onChange={(e) => onInputChange(e)} 
              />
              <label class="form-label" for="form2Example27">Position</label>
            </div>

            <div class="form-outline mb-2">
              <input 
              type="text" 
              id="form2Example27" 
              class="form-control form-control-md" 
              placeholder='Location'
              name='location'
              value={location}
              onChange={(e) => onInputChange(e)}
              />
              <label class="form-label" for="form2Example27">Location</label>
            </div>

            <div class="form-outline mb-2">
              <input 
              type="text" 
              id="form2Example27" 
              class="form-control form-control-md" 
              className='form-control'
              placeholder='Pay'
              name='pay'
              value={pay}
              onChange={(e) => onInputChange(e)}
              />
              <label class="form-label" for="form2Example27">Pay</label>
            </div>

            <div class="form-outline mb-2">
              <input 
              type="text" 
              id="form2Example27" 
              class="form-control form-control-md" 
              className='form-control'
              placeholder='Job Type'
              name='jobType'
              value={jobType}
              onChange={(e) => onInputChange(e)}
              />
              <label class="form-label" for="form2Example27">Job Type</label>
            </div>

            <div class="form-outline mb-2">
              <input 
              type="text" 
              id="form2Example27" 
              class="form-control form-control-md" 
              className='form-control'
              placeholder='Link'
              name='jobDescriptionLink'
              value={link}
              onChange={(e) => onInputChange(e)}
              />
              <label class="form-label" for="form2Example27">Link</label>
            </div>
           

            <div class="pt-1 mb-4">
              <button class="btn btn-dark btn-lg btn-block" type="submit">Submit</button>
            </div>
            </div>
            </form>
    )
}