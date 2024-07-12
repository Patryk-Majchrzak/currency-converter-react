import axios from "axios"
import { useEffect, useState } from "react";

export const useGetDataFromAPI = (URL) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(URL)
                setData(response.data)
            } catch (error) {
                alert("Unexpexted error occured, please try again later")
                console.error(error)
            }
        })()
    }, [URL])

    return data;
};

