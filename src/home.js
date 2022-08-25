import { Trans,withTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import React, { Component } from 'react'
class Home extends Component {


  render() {
    const { username } = this.state;
  const { t } = this.props;

  return (
    <div className='body'>
      <p>{t('welcome', {username: username})}</p>

      <div>
        <label>{t('change-username')}</label>
        <input type='text' onChange={this.updateUsername.bind(this)} />
        <button onClick={this.setUsername.bind(this)}>
          {t('submit')}
        </button>
      </div>
      <Trans i18nKey='go-to-page2'>
  <Link to='/page2'></Link>
  {{username}}
</Trans>
      
    </div>
  );


  }
}

export default withTranslation()(Home);