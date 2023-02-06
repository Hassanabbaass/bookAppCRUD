import axios from "axios";

export const deleteBook = async (bookId) => {
    const apiURL = '/books/'+bookId;
    return await axios.delete(apiURL)
} 