// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import translationEn from './src/i18n/locales/translationEn.json';
// import translationRu from './src/i18n/locales/translationRu.json';
// import translationHy from './src/i18n/locales/translationHy.json';
// import {Platform, NativeModules} from 'react-native';
//
// const deviceLanguage =
//     Platform.OS === 'ios'
//         ? NativeModules.SettingsManager.settings.AppleLocale ||
//         NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
//         : NativeModules.I18nManager.localeIdentifier;
// const splitedDeviceLanguage = deviceLanguage.split('_');
//  let language = splitedDeviceLanguage[0];
// // console.log(language,'languagelanguage')
// if (language !== 'en' || language !== 'ru' || language !== 'hy') {
//     language = 'ru';
// }
//
// const resources = {
//     en: {
//         translation: translationEn,
//     },
//     ru: {
//         translation: translationRu,
//     },
//     hy: {
//         translation: translationHy,
//     },
// };
//
// i18n
//     .use(initReactI18next)
//     .init({
//         resources,
//         lng: language,
//         compatibilityJSON: 'v3',
//         interpolation: {
//             escapeValue: false,
//         },
//     });
// export default i18n;


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import translationEn from './src/i18n/locales/translationEn.json';
import translationRu from './src/i18n/locales/translationRu.json';
import translationHy from './src/i18n/locales/translationHy.json';

type Language = 'en' | 'ru' | 'hy';

const resources = {
    hy: {
        translation: translationHy,
    },
    en: {
        translation: translationEn,
    },
    ru: {
        translation: translationRu,
    },
};

const initializeI18n = async () => {
    let language: Language = (await AsyncStorage.getItem('currentLanguage')) as Language;

    const deviceLanguage = Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier;
    const splitedDeviceLanguage = deviceLanguage.split('_',language);
    if (!['en', 'ru', 'hy'].includes(language)) {
        language = 'en';
    }

    await i18n
        .use(initReactI18next)
        .init({
            resources,
            lng: language,
            compatibilityJSON: 'v3',
            interpolation: {
                escapeValue: false,
            },
        });
};

initializeI18n();

export default i18n;




