import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';

const Results = () =>{
    const { category, id } = useParams();
    let [info, setInfo] = useState({});
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{
            setInfo(response.data)
        })
        .catch(err=>console.log(err))
    }, [category,id])
    return (
        <div>
            {
                category === "people"?
                    <>
                    <h1>Name: {info.name}</h1>
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p>
                    </>
                : category === "planets"?
                    <>
                    <h1>Name: {info.name}</h1>
                    <p>Climate: {info.climate}</p>
                    <p>Terrain: {info.terrain}</p>
                    </>
                : category === "starships"?
                    <>
                    <h1>Name: {info.name}</h1>
                    <p>Model: {info.model}</p>
                    <p>Manufactureer: {info.manufactureer}</p>
                    </>
                :
                <>
                <h1>These are not the droids you're looking for</h1>
                </>
            }
        </div>
    );
};

export default Results;