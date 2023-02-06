import axios from 'axios';

const apiURL = '/books';

export const getBooks = async () => {
    return await axios.get(apiURL)
}