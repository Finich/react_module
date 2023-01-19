const Character = ({char}) => {
    const {id, name, status, species, image} = char;
    return (
        <div className={'card'}>
            <h2>id: {id}</h2>
            <h2>name: {name}</h2>
            <h2>status: {status}</h2>
            <h2>species: {species}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

const RickAndMortyChars = (props) => {

    let {id,name,status,species,gender,image} = props;

    const chars = [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",

        },
        {
            id: 3,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
            id: 4,
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
            id: 5,
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        {
            id: 6,
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        },
    ]

    return (
        <div className={'wrap'}>
            {
                chars.map(char => <Character key={char.id} char={char}/> )
            }
        </div>
    );

}

export {
    RickAndMortyChars,

}