import React from 'react'
import Friend from './components/Friend';
import friendsList from './components/FriendsList';

function App() {
  const friendsMapped = friendsList.map(friendItem => <Friend friend={friendItem} key={friendItem.name}/>)
  return (
    <div>
      {friendsMapped}
    </div>
  )
}

export default App;
