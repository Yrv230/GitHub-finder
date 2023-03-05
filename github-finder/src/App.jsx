import Repos from './components/Repos';
import Search from './components/Search';
import UserInfo from './components/UserInfo';
import styles from './index.module.scss';

function App() {
  return (
    <div className={styles['App']}>
      <div className={styles['App__nav']}>
        <a href="/" className={styles['App__title']}>github finder</a>
      </div>
      <div className={styles['container']}>
        <Search />
        <UserInfo />
        <Repos />
      </div>
    </div>
  );
}

export default App;