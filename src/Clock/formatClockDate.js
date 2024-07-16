export const formatClockDate = (date) => {
    return new Date(date).toLocaleString(
        undefined,
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }
    )
}
