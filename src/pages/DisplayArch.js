import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function DisplayArch(props) {
    const navigate = useNavigate()
    
    const [isActive, setIsActive] = useState(true);

    const onClick = () => {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true)
        }
        toggleActive()
    }
    const toggleActive = () => {
        if (isActive) {
            return (
                <button onClick={onClick} type="button" class="btn btn-outline-primary">Active</button>
            )
        } else {
            return <button onClick={onClick} type="button" class="btn btn-outline-primary">Not Active</button>
        }
    }
    const arch = props.arch
    const updateArchived = () => {
        navigate(`/update_app/${arch.id}`)
    }
    return (
        <div>
            <div class="card-body">
                <h5 class="card-title">{arch.company}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{arch.position}</h6>
                <p class="card-text">{arch.jobType}</p>
                <p href="#" class="card-link">{arch.pay}</p>
                <a href="#" class="card-link">{arch.job_description_link}</a>
            </div>
            <div>
                <button onClick={updateArchived} type="button" class="btn btn-outline-info btn-md ">Edit</button>
                <button type="button" class=" ml-5 btn btn-outline-danger btn-md m-4">Delete</button>
                {toggleActive()}
            </div>
        </div>
    )
}