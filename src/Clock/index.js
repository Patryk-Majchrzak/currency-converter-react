import { useEffect, useState } from "react";
import "./style.css"

const Clock = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        };
    }, []);

    return(
 <p className="clockArea">
            {`Dzisiaj jest ${currentDate.toLocaleString(
                undefined,
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                }
            )}`}
        </p>
    );
};

export default Clock