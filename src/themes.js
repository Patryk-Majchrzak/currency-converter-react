const baseTheme = {
    colors: {
        fontWhite: "white",
        fontGrey: "rgb(109, 101, 101)",
        fontBlack: "hsl(0, 0%, 0%)",
        borderFieldset: "rgba(0, 0, 0, 0.503)",
        containerColor: "rgb(251, 251, 251)",
        error: "#6d100b",
        loadingCircleBorder: "#f3f3f3",
        loadingCircleMovingPart: "#3498db",
    },
    breakpoints: {
        extraSmall: "370",
        small: "576"
    },
}

export const lightTheme = {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        basic: "hsl(115, 90%, 20%)",
        basicHover: "hsl(115, 90%, 25%)",
        basicActive: "hsl(115, 90%, 25%)",
    },
    boxShadows: {
        container: "5px -5px 23px 12px #1b6323",
    },
}

export const darkTheme = {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        basic: "hsl(0, 0%, 15%)",
        basicHover: " hsl(0, 0%, 20%)",
        basicActive: "hsl(0, 0%, 25%)",
    },
    boxShadows: {
        container: "5px -5px 23px 12px #352e60",
    },
}