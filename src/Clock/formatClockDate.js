export const formatClockDate = (date) => {
    const language = document.documentElement.lang;
    
    return new Date(date).toLocaleString(
        language,
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
