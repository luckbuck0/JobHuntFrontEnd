import NavBar from "../layout/navbar";
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DisplayArch from "./DisplayArch";
import axios from 'axios'
export default function Home() {
    const navigate = useNavigate()
    const [archived, setArchived] = useState([])
    
   
  
    useEffect(() => {
        const fetchByUserId = async () => {
            try {
                const userToken = localStorage.getItem('authToken');
                const response = await axios.get('http://localhost:8080/api/auth/archived_apps', {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                });
                console.log("this is this-->", response.data);
                setArchived(response.data);



            } catch (error) {
                console.error('Error sending GET request archived:', error);
            }

        };


        fetchByUserId()
    }, []);


    console.log("this is archived", archived);

    return (

        <div>
            <NavBar />


            {
                archived.map((arch) => {
                    return (
                        <div class="card" >
                            <DisplayArch
                            arch={arch}
                            />
                         

                        </div>

                    )
                })
            }
        </div>

    )
}