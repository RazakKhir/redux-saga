import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {resources} from "./utils/localesLoader";

const getLang = () => {
    // get the language from window.sessionStorage.getItem (this one is set if user click btn switch lang and set inside storage)
    return "en"; // this part will be tweaked once done
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: getLang(),
        debug: true,
        defaultNS: "common",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;