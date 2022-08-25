import { withTranslation } from 'react-i18next';

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

      <p>Click <Link to='/page2'>here</Link> to go to page 2, {username}</p>
    </div>
  );


  }
}

export default withTranslation()(Home);