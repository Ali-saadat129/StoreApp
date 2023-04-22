import axios from "axios"

const URL = 'https://fakestoreapi.com/products'


const getData = async () => {

    const response = await axios.get(URL)
    return response.data
}


export default getData