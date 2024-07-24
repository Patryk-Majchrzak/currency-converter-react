import { useCurrentDate } from "./useCurrentDate";
import { ClockArea } from "./styled";
import { formatClockDate } from "./formatClockDate";
import { useTranslation } from "react-i18next";

const Clock = () => {

    const currentDate = useCurrentDate()
    const [t] = useTranslation("translation")

    return (
        <ClockArea>
            {t("Clock.todayIs")}{formatClockDate(currentDate)}
        </ClockArea>
    );
};

export default Clock;