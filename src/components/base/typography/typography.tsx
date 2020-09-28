import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";

function TypographyText() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className="use-fonts bold">
                <h2>{t("Gothamrounded")}</h2>
                <h1>{t("Aa")}</h1>
                <h4>{t("Bold")}</h4>
                <h4>{t("ABCDEFGHIJKLMNOPQRSTUVWXYZ")}</h4>
                <h4>{t("abcdefghijklmnopqrstuvwxyz")}</h4>
                <h4>{t("1234567890!@#$%^&*()_+.,")}</h4>
            </div>
            <div className="use-fonts medium">
                <h1>{t("Aa")}</h1>
                <h4>{t("Medium")}</h4>
                <h4>{t("ABCDEFGHIJKLMNOPQRSTUVWXYZ")}</h4>
                <h4>{t("abcdefghijklmnopqrstuvwxyz")}</h4>
                <h4>{t("1234567890!@#$%^&*()_+.,")}</h4>
            </div>
            <div className="use-fonts light"></div>
        </Fragment>

    );
}

export default TypographyText;