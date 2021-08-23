import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

function Main() {
    const context = useContext(ThemeContext)
    return (
        <div id='main' className={`${context.theme}Main`}>
            <button 
                id='toggleButton' 
                className={`${context.theme}Theme`} 
                onClick={context.toggleTheme}>Change Theme
            </button>
        </div>
    )
}

export default Main