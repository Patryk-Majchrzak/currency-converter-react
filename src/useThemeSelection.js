import { useState } from "react";
import { darkTheme, lightTheme } from "./themes";

export const useThemeSelection = () => {
    const [isDocumentThemeDark, setIsDocumentThemeDark] = useState(false)

    const changeDocumentTheme = () => {
        if (!isDocumentThemeDark) {
            setIsDocumentThemeDark(true)
        } else {
            setIsDocumentThemeDark(false)
        }
    }

    const theme = isDocumentThemeDark === true ? darkTheme : lightTheme;

    return{
        isDocumentThemeDark,
        theme,
        changeDocumentTheme,
    }
}