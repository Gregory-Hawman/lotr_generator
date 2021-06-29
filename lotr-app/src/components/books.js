import React, { useEffect, useState } from 'react';

function Books() {
    const [book, setBook] = useState();
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer DiECrQwsj2zDY2MhaCeg'
        }
        const fetchData = async () => {
            const rawBooks = await fetch('https://the-one-api.dev/v2/book', { headers: headers })
            const books = await rawBooks.json();
            const book = books.docs[Math.floor(Math.random() * books.docs.length)];
            setBook(book.name)
        }

        fetchData()
    },[])

    return (
        <div>
            {book}
        </div>
    )
}

export default Books;