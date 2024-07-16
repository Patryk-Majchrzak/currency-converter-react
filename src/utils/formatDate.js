export const formatDate = (date) => {
    return new Date(date).toLocaleString(
        undefined,
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