import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const SearchForm=()=>{
    let [categories, setCategories] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState('people');
    let [id, setId] = useState(null);
    const history = useHistory();
    useEffect(()=>{
        axios.get('https://swapi.dev/api/')
        .then(response=>{
            setCategories(Object.keys(response.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    const formHandler=(e)=>{
        e.preventDefault();
        history.push(`/${selectedCategory}/${id}`)
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <label htmlFor="">Search For:</label>
                <select onChange={(e)=>{setSelectedCategory(e.target.value)}}>
                    {
                        categories.map((category, idx)=>{
                            return(
                                <option key={idx} value={category}>{category}</option>
                            )
                        })
                    }
                </select>
                <label htmlFor="">ID</label>
                <input type="number" onChange={(e)=>{setId(e.target.value)}}/>
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchForm