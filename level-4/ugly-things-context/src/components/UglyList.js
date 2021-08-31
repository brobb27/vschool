import React, { useContext, useEffect } from 'react'
import SavedThing from './SavedThing'
import { UglyContext } from './uglyContext'
import axios from 'axios'

function UglyList() {
    const { savedList, setSavedList } = useContext(UglyContext)

    // Gets list when the page loads
    useEffect(() => {
        axios.get('https://api.vschool.io/blairrobbins/thing')
            .then(res => setSavedList(() => [...res.data]))
            .catch(err => console.log(err))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Maps savedList and mounts SavedThing to UglyList
    const savedComponents = savedList.map(item => <SavedThing key={item._id} thing={item} />)

    return (
        <div id='uglyList'>
            <div id='uglyListTitle'>
                <h1>List of Uglyness</h1>
            </div>
            {savedComponents}
        </div>
    )
}

export default UglyList