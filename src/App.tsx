/*
 * @description: grid Component
 * @Author: Gouxinyu
 * @Date: 2022-09-19 22:53:23
 */

import {
    defineComponent,
    ref,
    defineAsyncComponent,
    resolveComponent,
    h,
} from "vue";
import './style.less';

export default defineComponent({
    name: "App",
    setup() {
        return () => (
            <div class="setting-panel">
                <div class="video-roll-actions">
                    <van-row justify="center" gutter={20} wrap={false}>
                        <van-col span={8}>1</van-col>
                        <van-col span={8}>2</van-col>
                        <van-col span={8}>3</van-col>
                    </van-row>
                </div>
            </div>
        );
    }
});
