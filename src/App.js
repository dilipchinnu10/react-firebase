import './App.css';
import { useEffect, useState } from 'react';
import { db } from './Firebase';
import { addDoc, collection, getDocs} from "firebase/firestore";
import { async } from '@firebase/util';

const App = () => {

const [users, setUsers] = useState([]);
const [newName, setNewName] = useState("");
const [newAge, setNewAge] = useState(0);

const usersCollectionRef = collection(db, "users");

const createUser = async () => {
  await addDoc(usersCollectionRef, {name: newName, age: newAge});
  };

useEffect(() => {
const getUsers = async () => {

 const data = await getDocs(usersCollectionRef);
 setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));

 const createUser = async () => {
 await addDoc(usersCollectionRef, {name: newName, age: newAge});
 }

}; 
getUsers();
}, [setUsers]);
  return (
    <div className='App'>

      <input type="text" placeholder='Name' onChange={(event)=> setNewName(event.target.value)}/>
      <input type="number" placeholder="Age" onChange={(event)=>setNewAge(event.target.value)}/>
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return <div><h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1></div>
      })}
    </div>

     );
}

export default App;
