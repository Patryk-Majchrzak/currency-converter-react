export const formatDate = (date) => {
    const language = document.documentElement.lang

    return new Date(date).toLocaleString(
        language,
        {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }
    )
}