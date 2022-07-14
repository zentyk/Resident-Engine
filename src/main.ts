import './style.css'

import {createApp} from "vue";

import app from "./App.vue";
import i18n from "./i18n/i18n.js";

const App = createApp(app);
const trad = i18n;
App.use(trad);
App.mount('#app');
export default App;