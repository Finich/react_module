// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
// mission_name":
// launch_year":
// "mission_patch_small":


const Launch = ({launch}) => {
    return (
        <div className={'card'}>
            <h2>{launch.mission_name}</h2>
            <img src={launch.links.mission_patch_small} alt={launch.mission_name}/>
            <p><strong>{launch.launch_year}</strong></p>
        </div>
    );
};

export {
    Launch
};