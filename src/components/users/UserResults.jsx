import React, { useContext, useEffect } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'


function UserResults() {
    const { users, isLoading } = useContext(GithubContext)

    useEffect(() => {
        // fetchUsers()
    }, [])

    if(!isLoading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:trid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user, key) => (
                    <UserItem key={key} user={user} />
                ))
                    
                }
            </div>
          )
    } else {
        return (
            <Spinner />
        )
    }
}

export default UserResults