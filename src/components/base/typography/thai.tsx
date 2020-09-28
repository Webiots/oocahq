import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import  TypographyText from './typography'
function ThaiLang() {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('th');

    },[i18n]);

    return (
      <TypographyText/>
    );
}

export default ThaiLang;