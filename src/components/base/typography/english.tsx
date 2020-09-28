import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import  TypographyText from './typography'
function EnglishLang() {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('es');

    }, []);

    return (
      <TypographyText/>
    );
}

export default EnglishLang;