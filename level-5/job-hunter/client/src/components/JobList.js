import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import Job from './Job'
import { ContextInfo } from './contextInfo'

function JobList() {
    // useState to store bounty list
    const { jobList, setJobList } = useContext(ContextInfo)

    // axios get request
    function getJobList() {
        axios.get('/jobs')
        .then(res => {
            // console.log(res.data)
            setJobList(res.data)
        })
        .catch(err => console.log(err))
    }

    // get request to own server
    useEffect(() => {
        getJobList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // components
    const jobComponents = jobList.map(jobInfo => <Job info={jobInfo} key={jobInfo._id} />)

    return (
        <div id='jobListSection'>
            <h2>Your Jobs</h2>
            <div id='jobList'>
                <h3 id='interestedTitle'>Interested</h3>
                <h3 id='appliedTitle'>Applied</h3>
                {jobComponents}
            </div>
        </div>
    )
}

export default JobList
