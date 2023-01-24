// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
import {User} from "../User/User";
import {useEffect, useState} from "react";
import {userService} from "../Services/userService";


const Users = () => {

    const [users, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
    userService.getAll()
        .then(value => value.data)
        .then(value => setUsers([...value]))
    },[])


    return (
        <div>

            <div className={'user-info'}><h3>User details:</h3>
                {userDetails && <p><b>Email: </b>{userDetails.email}</p>}
                {userDetails && <p><b>Phone: </b>{userDetails.phone}</p>}
                {userDetails && <p><b>Username: </b>{userDetails.username}</p>}
            </div>
            <div className={'user-wrap'}>
            {
                users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)
            }
            </div>
        </div>
    );
};

export {Users,};