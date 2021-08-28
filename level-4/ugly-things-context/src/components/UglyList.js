import React, { useContext, useEffect } from 'react'
import SavedThing from './SavedThing'
import { UglyContext } from './uglyContext'
import axios from 'axios'

function UglyList() {
    const { savedList, postMade, setSavedList } = useContext(UglyContext)

    useEffect(() => {
        console.log(`rendered ${postMade}`)
        axios.get('https://api.vschool.io/blairrobbins/thing')
            .then(res => setSavedList(() => [...res.data]))
            .catch(err => console.log(err))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Map and mount savedList
    const savedComponents = savedList.map(item => <SavedThing key={item._id} thing={item} />)

    return (
        <div id='uglyList'>
            <div id='uglyListTitle'>
                <h1>Ugly List</h1>
            </div>
            {savedComponents}
        </div>
    )
}

export default UglyList