import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getBooks } from '../services/getBooks'; 
import { deleteBook } from '../services/deleteBook';


const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks().then((result)=>{
            setBooks(result.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleDeleteBook = (bookId) => {
        deleteBook(bookId).then((result)=>{
            console.log(result)
            window.location.reload()
        }).catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
        <h1>Hassan's Books App</h1>

        <div className='booksDiv'>
        {books.map((item, i) => (
            <div key={i} className='bookDiv'>
                {item.cover && <img src={item.cover} alt=''/>}
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <span>{item.price}</span>
                <button className='delete' onClick={()=>{handleDeleteBook(item.id)}}>Delete</button>
                <button className='update'><Link className='updateLink' to={`/update/${item.id}`}>Update</Link></button>
            </div>
        ))}
        </div>

        <button className='addNewBook'><Link className='addLink' to='/add'>ADD NEW BOOK</Link></button>

    </div>
  )
}

export default Books