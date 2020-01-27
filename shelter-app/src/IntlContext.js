import React, { useState } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';
import Translations from './translations';
import config from './config';

addLocaleData([...en, ...pl]);

const Context = React.createContext();

const IntlProviderWrapper = ({ children }) => {
  const [locale, switchLanguage] = useState(config.lang);
  console.log('locale: ', locale);
  return (
    <Context.Provider value={{ switchLanguage }}>
      <IntlProvider
        key={Translations[locale] ? locale : config.lang}
        locale={Translations[locale] ? locale : config.lang}
        messages={
          Translations[locale]
            ? Translations[locale]
            : Translations[config.lang]
        }
        defaultLocale={config.lang}
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export { IntlProviderWrapper, Context as IntlContext };