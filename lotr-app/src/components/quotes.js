import React, { useState, useEffect } from 'react';

function Quotes() {
    const [quote, setQuote] = useState();
    const [characterQuote, setCharacterQuote] = useState();

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer DiECrQwsj2zDY2MhaCeg'
        }
        const fetchData = async () => {
            const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', { headers: headers })
            const quotes = await rawQuotes.json();
            const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
            setQuote(quote.dialog)
            const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers: headers })
            const characters = await rawCharacters.json();
            const character = characters.docs[0];
            setCharacterQuote(character.name)
        }

        fetchData();
    }, []);

    return (
        <div>
            <blockquote>{quote}</blockquote>
            <cite>- {characterQuote}</cite>
        </div>
    )
}

export default Quotes;