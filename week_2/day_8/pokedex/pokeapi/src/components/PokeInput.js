
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PokeInput() {

    const [name, setName] = useState('');
    const [data, setData] = useState([]);


    function onPokeFormSubmit(e) {
        e.preventDefault();

        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.json())
            .then(
                (result) => {
                    let types = []
                    for(let i = 0; i < result.types.length; i++){
                        types.push(result.types[i].type.name);
                    }
                    setData(types);

                }
            )
    }
    

    
    return(
        <div>
        <form onSubmit={onPokeFormSubmit}>
          <div className="input-group mb-3">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control"
              placeholder="Enter Pokemon"
              type="text"
            ></input>
            <button className="btn btn-outline-secondary bg-white text-black" type="submit">
              Search
            </button>
          </div>
        </form>
              <div>
                { data }
              </div>

      </div>
    );
}