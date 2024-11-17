import ns1En from '@/assets/locales/en.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: {
      ns1: typeof ns1En;
    };
  }
}
