import { useCurrentDate } from "./useCurrentDate";
import { ClockArea } from "./styled";

const Clock = () => {

    const currentDate = useCurrentDate()

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