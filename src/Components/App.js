import { useState, useEffect } from 'react';
//import './App.css';
import UserCard from './UserCard';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userInfo;

      try{
        const response = await fetch('https://randomuser.me/api?results=50');
        userInfo = (await response.json()).results;
      }catch(error){
        userInfo = [];
      }

      setUsers(userInfo);
    })();
  }, []);

  return (
    <div className="App">
      {users.map((user, index) => (
        <UserCard userInfo = {user} key = {index}/>
      ))}
    </div>
  );
}

export default App;