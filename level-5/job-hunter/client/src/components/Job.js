import axios from 'axios'
import React, { useState, useContext } from 'react'
import { ContextInfo } from './contextInfo'
import Form from './Form'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

function Job({ info }) {
    // use context for job list
    const { setJobList } = useContext(ContextInfo)

    // state for isEditing
    const [isEditing, setEdit] = useState(false)

    // const id = info._id

    // toggle edit function
    function toggleEdit() {
        setEdit(prevStatus => {
            return !prevStatus
        })
    }

    // delete request to remove a job
    function removeJob() {
        axios.delete(`/jobs/${info._id}`)
            .then(res => {
                console.log(res)
                setJobList(prevList => prevList.filter(savedJob => savedJob._id !== info._id))
                alert(`You have successfully removed ${info.position} at ${info.company} from your job list.`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={info.applied === true ? 'applied' : 'interested'}>
            {isEditing === false ?
            <>
                <div className='jobInfo'>
                    <h2>{info.position}</h2>
                    <h3>{info.company}</h3>
                    <p>Estimated Salary: {info.estimatedSalary}</p>
                    <p>Location: {info.type}</p>
                    {info.applied === false ? 
                    <p>Application Not Submitted <AiOutlineClose style={{color: 'red', fontSize: '1.4rem', position: 'relative', top: '.25rem', zIndex: '0'}} /></p> 
                    : 
                    <p>Applied <AiOutlineCheck style={{color: 'green', fontSize: '1.4rem', position: 'relative', top: '.25rem', zIndex: '0'}} /></p>
                    }
                    <p><a href={info.postUrl} rel="noopener noreferrer" target='_blank'>Job Posting Link</a></p>
                </div>
                <button onClick={toggleEdit}>Update</button>
                <button onClick={removeJob}>Remove Job</button>
            </>
            :
            <Form
                position={info.position}
                company={info.company}
                estimatedSalary={info.estimatedSalary}
                type={info.type}
                applied={info.applied}
                postUrl={info.postUrl}
                _id={info._id}
                isEditing={isEditing}
                setEdit={setEdit}
                class='editForm'
             />}
        </div>
    )
}

export default Job
