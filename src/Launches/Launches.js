import {useEffect, useState} from "react";
import {Launch} from "../Launch/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value));}, []);

    const filteredLaunches = launches.filter((item) => item.launch_year !== '2020');
    return (
        <div className={'wrap'}>
            {
                filteredLaunches.map((launch,index) => <Launch key={index} launch={launch} />)
            }
        </div>
    );
};

export default Launches;