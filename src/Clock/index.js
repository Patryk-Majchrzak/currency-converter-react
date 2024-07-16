import { useCurrentDate } from "./useCurrentDate";
import { ClockArea } from "./styled";
import { formatDate } from "../utils/formatDate";
import { formatClockDate } from "./formatClockDate";

const Clock = () => {

    const currentDate = useCurrentDate()

    return (
        <ClockArea>
            {`Dzisiaj jest ${formatClockDate(currentDate)}`}
        </ClockArea>
    );
};

export default Clock