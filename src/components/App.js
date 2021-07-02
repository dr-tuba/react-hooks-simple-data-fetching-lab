import React from 'react'
import { useState, useEffect } from 'react';

function App() {
    const [dogImg, setDogImg] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then((data) => {
                setDogImg(data.message);
                setIsLoaded(true);
            });
    }, [])
    
    return (
        <div>
            {isLoaded ? <img src={dogImg} alt='A Random Dog'></img> : <p>Loading...</p>}
        </div>
    )
}

export default App
