import React from 'react'
import UserList from '../../components/UserList'

const Users = ({ users }) => {
  return (
    <>
        <h1>Users List</h1>
        <UserList users={users} />
    </>
  )
}

export async function getStaticProps () {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    console.log(users);

    return {
        props: {
            users
        }
    }
}

export default Users