import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Switch theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
