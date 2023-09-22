import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);


    const fecthData = async () => {
        try {
            //Gelen data'yı farklı bir ad ile kullanmak için yaptık.
            const { data: responseData } = await axios.get(url);
            setData(responseData);
            setIsLoading(false);
        } catch (error) {
            setError(error.message)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fecthData();
    }, [])

    return { error, isLoading, data };
}

export default useFetch;