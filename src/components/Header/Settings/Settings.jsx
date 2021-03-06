import { connect } from "react-redux";
import { SvgSelector } from "../../_common/SvgSelector/SvgSelector";
import styles from "./Settings.module.scss";
import { logOut } from "../../../redux/authReducer";
import { setLanguage, setTheme } from "../../../redux/appReducer";
import { selectCurrentTheme, selectCurrentLanguage } from "../../../redux/appSelectors";
import Selector from "./Selector/Selector";
import { useContext } from "react";
import { AppContext } from "../../../App";

const Settings = ({ logOut, theme, lang, setLanguage, setTheme, isAuth }) => {
    const appContext = useContext(AppContext);

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>
            <div className={styles.item}>
                <SvgSelector className={styles.icon + " " + styles.icon_theme} id="theme" />
                <span className={styles.item__title}>
                    {appContext.currentLanguage === "eng" && "Theme:"} {appContext.currentLanguage === "ru" && "Тема:"}
                </span>
                <Selector selectorType="theme" theme={theme} setTheme={setTheme} />
            </div>
            <div className={styles.item}>
                <SvgSelector className={styles.icon + " " + styles.icon_language} id="language" />
                <span className={styles.item__title}>
                    {appContext.currentLanguage === "eng" && "Language:"} {appContext.currentLanguage === "ru" && "Язык:"}
                </span>
                <Selector selectorType="lang" lang={lang} setLanguage={setLanguage} />
            </div>
            {isAuth && (
                <div onClick={logOut} className={styles.item + " " + styles.item_active}>
                    <SvgSelector className={styles.icon + " " + styles.icon_logout} id="logout" />
                    <span className={styles.item__title}>
                        {appContext.currentLanguage === "eng" && "Log out"} {appContext.currentLanguage === "ru" && "Выйти"}
                    </span>
                </div>
            )}
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        theme: selectCurrentTheme(state),
        lang: selectCurrentLanguage(state),
    };
};

let dispatchObj = {
    logOut,
    setLanguage,
    setTheme,
};

export default connect(mapStateToProps, dispatchObj)(Settings);
