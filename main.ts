/*
 * @description: popup entry
 * @Author: Gouxinyu
 * @Date: 2022-01-13 19:43:08
 */
/// <reference path="./shims-vue.d.ts" />
import { createApp } from "vue";
import '@vant/touch-emulator';
import {Row as me} from 'vant';
import App from "./src/App";

import Col from "vant/es/Col/index.mjs";
import Row from "vant/es/Row/index.mjs";

console.log(me, Row, me === Row);

import "vant/es/Col/style/index.mjs";
import "vant/es/Row/style/index.mjs";

createApp(App)
    .use(Col)
    .use(Row)
    .mount("#app");
