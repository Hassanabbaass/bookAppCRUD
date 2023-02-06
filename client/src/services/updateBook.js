import axios from "axios";

export const updateBook = async (bookId,bookInfo) => {
    const apiURL ='/books/' + bookId;
    return await axios.put(apiURL,bookInfo)
}