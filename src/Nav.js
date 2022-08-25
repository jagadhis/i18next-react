import React from 'react';
import { useTranslation } from 'react-i18next';


const Nav = (props) => {
    const {t} = useTranslation();
    return (
        <div>
            <link to="/">{t("Home")}</link>
            <link to="/">{t("Next Page")}</link>
        </div>
    );
}

export default Nav;