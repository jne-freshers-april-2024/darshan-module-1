import React, { useEffect, useState } from "react";
import Book from "./Book";

const BookList = () => {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json')
            .then((response) => {
               
                return response.json();
            })
            .then((data) => {
                setBooksData(data);
                console.log(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            {booksData.length > 0 ? (
                booksData.map((book) => (
                    <Book key={book.id} {...book} />
                ))
            ) : (
                <h2>No Books Available</h2>
            )}
        </div>
    );
};

export default BookList;
