// Book.js
import React from "react";
import './Book.css';

const Book = (bookData) => {
    return (
        <div className="book-container">
            <div className="book-card">
                <h3 className="book-title">{bookData.name}</h3>
                <p className="book-author">Author: {bookData.author}</p>
                <p className="book-language">Language: {bookData.language}</p>
                <p className="book-direction">Direction: {bookData.direction}</p>
                <p className="book-source">
                    Source: <a href={bookData.source} target="_blank" rel="noopener noreferrer">Source Link</a>
                </p>
                <a
                    href={bookData.link}
                    className="book-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read More
                </a>
            </div>
        </div>
    );
}

export default Book;
