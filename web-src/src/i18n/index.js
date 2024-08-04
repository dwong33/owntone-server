import { createI18n } from 'vue-i18n'

/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax.
 */
import messages from '@intlify/unplugin-vue-i18n/messages'

export default createI18n({
  availableLocales: ('de', 'en', 'fr', 'zh-CN', 'zh-TW'),
  fallbackLocale: 'en',
  fallbackWarn: false,
  legacy: false,
  locale: navigator.language,
  messages,
  missingWarn: false
})
