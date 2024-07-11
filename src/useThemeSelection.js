import { useState } from "react";
import { darkTheme, lightTheme } from "./themes";

export const useThemeSelection = () => {
    const [darkDocumentMotive, setDarkDocumentMotive] = useState("")

    const changeDocumentMotive = () => {
        if (!darkDocumentMotive) {
            setDarkDocumentMotive("dark")
        } else {
            setDarkDocumentMotive("")
        }
    }

    const theme = darkDocumentMotive === "dark" ? darkTheme : lightTheme;

    return{
        darkDocumentMotive,
        theme,
        changeDocumentMotive
    }
}