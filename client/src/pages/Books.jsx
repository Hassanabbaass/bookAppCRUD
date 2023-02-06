import React, { useEffect, useState } from 'react';

import { getBooks } from '../services/getBooks'; 


const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks().then((result)=>{
            console.log(result.data);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <div>Books</div>
  )
}

export default Books