import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/addBook';

const Add = () => {

    const nav = useNavigate();

    const [addedBook, setAddedBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    })

    const handleChange = (e) => {
        setAddedBook((prev) => (
            {...prev, [e.target.name]: e.target.value}
        ))
    }

    const handleAddBook = (e) => {
        e.preventDefault();
        addBook(addedBook).then((result)=> {
            console.log(result)
            nav('/')
        }).catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div className='form'>
        <h1>Add New Book</h1>
        <input type="text" placeholder='title' onChange={handleChange} name='title'/>
        <input type="text" placeholder='desc' onChange={handleChange} name='desc'/>
        <input type="number" placeholder='price' onChange={handleChange} name='price'/>
        <input type="text" placeholder='cover' onChange={handleChange} name='cover'/>
        <button onClick={handleAddBook}>Add</button>
    </div>
  )
}

export default Add