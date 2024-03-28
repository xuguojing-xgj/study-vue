// import { th } from 'element-plus/es/locale';
import { ref, watchEffect } from 'vue';

const theme = ref('light');

watchEffect(() => {
    // 找到页面的根元素 设置自定义属性
    document.documentElement.dataset.theme = theme.value;
})


export default function useTheme() {
    return {
        theme
    }
}