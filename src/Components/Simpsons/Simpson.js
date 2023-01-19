const SimpsonMember = (props) => {
    let {memberName, memberPicture, desc} = props;

    let classNameMember = 'card';

    return (
        <div className={classNameMember}>
            <h2>{memberName}</h2>
            <img src={memberPicture} alt={memberName}/>
            <p>{desc}</p>
        </div>
    )
}

export {SimpsonMember};