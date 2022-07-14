import {createI18n} from "vue-i18n";
import messages from "./en.js";

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: messages
});

export default i18n;