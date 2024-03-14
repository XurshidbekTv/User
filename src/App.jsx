import './App.css'
import Footer from './footer/footer'
import Navbar from './navbar/navbar'
import { useState } from 'react'
import UserList from './footer/userList/UserList'
import NewUserForm from './footer/newuser/NewUserForm'

function App() {
  const [showModal, setShowModal]=useState(false)
 const [users, setUsers] = useState([]);

//Delete Users
const deleteUser=(id)=>{
  setUsers((prev)=>{
    return prev.filter((user)=>{
      return user.id !==id;
    })
  })
}
const closeModal=(e)=>{
if(e.target.className=="overlay"){
  setShowModal(false)
}
if(e.key=="Escape"){
  setShowModal(false)
}
}

const addUser=(user)=>{
  setUsers((prev)=>{
    return [...prev, user]
  })
  setShowModal(false)
} 
  return (
   <div onClick={closeModal} onKeyDown={closeModal} className='App'>
    <Navbar usersLenght={users.length}></Navbar>
    <main>
      <div className="no-users">
        {users.length==0 && <h2>No Users</h2>}
      </div>
      <UserList users={users} deleteUser={deleteUser}/>
    </main>
    {showModal && <NewUserForm addUser={addUser}/>}
    <button onClick={()=>setShowModal(true)} className='create-user'>Create-user</button>
    <Footer/> 
  </div>
   
  )
}

export default App


