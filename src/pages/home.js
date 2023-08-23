import NavBar from "../layout/navbar";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Home() {

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
                            <div class="card-body">
                                <h5 class="card-title">{arch.company}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">{arch.position}</h6>
                                <p class="card-text">{arch.jobType}</p>
                                <p href="#" class="card-link">{arch.pay}</p>
                                <a href="#" class="card-link">{arch.job_description_link}</a>
                            </div>
                        </div>

                    )
                })
            }
        </div>

    )
}