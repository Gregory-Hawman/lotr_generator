import React, { useState, useEffect } from 'react';

function Characters() {
    const [character, setCharacter] = useState();
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer DiECrQwsj2zDY2MhaCeg'
        }
        const fetchData = async () => {
            const rawCharacters = await fetch('https://the-one-api.dev/v2/character', { headers: headers })
            const characters = await rawCharacters.json();
            const character = characters.docs[Math.floor(Math.random() * characters.docs.length)];
            setCharacter(character.name)
        }

        fetchData()
    }, [])

    return (
        <div>
            {character}
        </div>
    )
}

export default Characters;