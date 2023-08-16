
import { createI18n } from 'vue-i18n'
import zh from './Language/zh'
import en from './Language/en'

export default createI18n({
    legacy: false,  // 没有该参数可能会报错
    locale: 'zh',
    messages: {
        zh,
        en
    }
})
