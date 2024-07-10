import { useEffect, useState } from "react";
import { ClockArea } from "./styled";

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
 <ClockArea>
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
        </ClockArea>
    );
};

export default Clock