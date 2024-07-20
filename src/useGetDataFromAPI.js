import { useEffect, useState } from "react";
import { sendAxiosRquest } from "./utils/sendAxiosRequest";

export const useGetDataFromAPI = (URL) => {
    const [data, setData] = useState({
        status: "loading"
    });

    useEffect(() => {
        const getData = async () => {

            try {
                const response = await sendAxiosRquest(URL)
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
        
        let timeoutId;

        timeoutId = setTimeout(getData, 2000);

        return() => clearTimeout(timeoutId)

    }, [URL])

return data;
};

