import axios from "axios"
import { useEffect, useState } from "react";

export const useGetDataFromAPI = (URL) => {
    const [data, setData] = useState({
        status: "loading"
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(URL)
                setData({
                    status: "success",
                    data: response.data
                })
            } catch (error) {
                setData({
                    status: "error"
                })
            }
        }
        setTimeout(getData, 2000)
    }, [URL])

return data;
};

