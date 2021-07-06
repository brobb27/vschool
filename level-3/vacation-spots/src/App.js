import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import vacationData from './components/vacationData'




function App() {
  const CardComponents = vacationData.map(vacation => <Card key={vacation.place} destination={vacation} />)

  return (
    <div>
      <Header />
      {CardComponents}
    </div>
  )
}

export default App
