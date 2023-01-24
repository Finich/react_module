// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)


const User = ({user, setUserDetails}) => {
    const {id, name} = user;


    return (
        <div className={'user-block'}>
            <h2>id: {id}</h2>
            <h2>Name: {name}</h2>
            <button onClick={() => setUserDetails(user)}>Select User</button>
        </div>
    );
};

export {User};