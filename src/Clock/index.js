import { useCurrentDate } from "./useCurrentDate";
import { ClockArea } from "./styled";
import { formatClockDate } from "./formatClockDate";

const Clock = () => {

    const currentDate = useCurrentDate()

    return (
        <ClockArea>
            {`Dzisiaj jest ${formatClockDate(currentDate)}`}
        </ClockArea>
    );
};

export default Clock;