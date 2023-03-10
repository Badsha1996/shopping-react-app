import axios from "axios";

export async function getItemsData() {
    try {
        const res = await axios.get(
            "https://fakestoreapiserver.reactbd.com/products/"
        )
        return res.data
    } catch (error) {
        console.log(error)
    }
   
}