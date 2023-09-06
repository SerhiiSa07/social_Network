import React from "react";
import styles from './users.module.css'
let Users = (props) => {

    if (props.users.length === 0 ) {

        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVYHubvM_wZh1VjNGcr0tJRnkM97Ke8tbXA&usqp=CAU',
                followed: false,
                fullName: 'Serg',
                status: 'Whate is you name ?',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVYHubvM_wZh1VjNGcr0tJRnkM97Ke8tbXA&usqp=CAU',
                followed: true,
                fullName: 'Frend',
                status: 'Whate is you name ?',
                location: {city: 'Warsawa', country: 'Poland'}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVYHubvM_wZh1VjNGcr0tJRnkM97Ke8tbXA&usqp=CAU',
                followed: false,
                fullName: 'Lubach',
                status: 'Whate is you name ?',
                location: {city: 'Praha', country: 'Chehia'}
            }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>


            </div>)

        }
    </div>
}

export default Users
