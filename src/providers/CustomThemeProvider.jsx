"use client";
//NÃO ESTÁ EM USO, DEIXADO APENAS PARA APRENDIZADO
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

export default function CustomThemeProvider({ children }) {
    const { theme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return (
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        );
    }
};
