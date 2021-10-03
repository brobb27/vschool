import React, { useState } from "react";

const ContextInfo = React.createContext()

function ContextInfoProvider(props) {
    // State handlers
    const [jobList, setJobList] = useState([])

    return (
        <ContextInfo.Provider value={{jobList, setJobList}}>
            {props.children}
        </ContextInfo.Provider>
    )
}

export {ContextInfoProvider, ContextInfo}