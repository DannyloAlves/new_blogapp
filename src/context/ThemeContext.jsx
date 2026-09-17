"use client";
import { darkTheme, lightTheme } from "@/styles/theme";
import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        return getFromLocalStorage();
    });
    const [theme, setTheme] = useState(mode === "light" ? lightTheme : darkTheme);
    const [mounted, setMounted] = useState(false);

    const toggle = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
        setTheme(mode === "light" ? darkTheme : lightTheme);
    };

    useEffect(() => {
        localStorage.setItem("theme", mode);
    }, [mode]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return (
            <ThemeContext.Provider value={{ mode, toggle }}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        );
    }
};