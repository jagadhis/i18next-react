import { Trans, withTranslation } from 'react-i18next';

const Page2 = () => (
    <><p><Trans>this-is-page2</Trans></p><Trans i18nKey='go-to-home'>
        <Link to='/'></Link>
    </Trans></>

);

export default withTranslation()(Page2);