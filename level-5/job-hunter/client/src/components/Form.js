import React, { useState, useContext } from "react";
import axios from "axios";
import { ContextInfo } from "./contextInfo";

function Form(props) {
    // use context to set job list
    const { setJobList } = useContext(ContextInfo)

    // set default values if there are no props
    const initValues = {
        position: props.position || '',
        company: props.company || '',
        estimatedSalary: props.estimatedSalary || '',
        type: props.type || 'remote',
        postUrl: props.postUrl || '',
        applied: props.applied || false,
    }

    // state handler for job details
    const [jobDetails, setJobDetails] = useState(initValues)

    // destructuring for convience
    const {position, company, estimatedSalary, type, postUrl, applied} = jobDetails

    // on change function for inputs
    function handleChange(e) {
        const {name, value} = e.target

        setJobDetails(prevDetails => {
            return {
                ...prevDetails,
                [name]: value
            }
        })
    }

    // toggle for checkbox
    function toggleAlive() {
        setJobDetails(prevDetails => {
            return {
                ...prevDetails,
                applied: !prevDetails.applied
            }
        })

    }

    // post request to server
    function addJob(e) {
        e.preventDefault()
        axios.post('/jobs', jobDetails)
            .then(res => {
                console.log(res)
                const newJob = res.data
                setJobList(prevList => [...prevList, newJob])
            })
            .catch(err => console.log(err.response.data.errMsg))
        setJobDetails(initValues)
    }

    // put request to server
    function updateJob(e) {
        e.preventDefault()
        axios.put(`/jobs/${props._id}`, jobDetails)
            .then(res => {
                console.log(res)
                const updatedJobDetails = res.data
                setJobList(prevList => prevList.map(job => job._id !== updatedJobDetails._id ? job : updatedJobDetails))
            })
            .catch(err => console.log(err.response.data.errMsg))
        props.setEdit(prevState => !prevState)
    }

    return (
        <div>
            <form className={props.class} onSubmit={props.isEditing === false ? addJob : updateJob}>
                <input 
                    type='text'
                    name='position'
                    placeholder='Position Title'
                    value={position}
                    onChange={handleChange}
                    required
                />
                <input 
                    type='text'
                    name='company'
                    placeholder='Company Name'
                    value={company}
                    onChange={handleChange}
                />
               <input 
                    type='text'
                    name='estimatedSalary'
                    placeholder='Estimated Salary'
                    value={estimatedSalary}
                    onChange={handleChange}
                />
                <input 
                    type='url'
                    name='postUrl'
                    placeholder='Job Posting URL'
                    value={postUrl}
                    onChange={handleChange}
                />
                <select name='type' onChange={handleChange} value={type}>
                    <option value='remote'>Remote</option>
                    <option value='in-office'>In-Office</option>
                    <option value='hybrid'>Hybrid</option>
                </select>
                <label htmlFor='applied' id='formCheck'>{applied === true ? 'Applied' : 'Application Submitted?'}
                    <input 
                        type='checkbox'
                        name='applied'
                        checked={applied}
                        onChange={toggleAlive}
                    />
                </label>
                <button>{props.isEditing === false ? 'Add Job' : 'Update Job'}</button>
            </form>
        </div>
    )
}

export default Form