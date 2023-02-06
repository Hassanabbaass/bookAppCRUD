import axios from 'axios'

const apiURL = '/books'

export const addBook = async (bookInfo) => {
    return await axios.post(apiURL, bookInfo);
}