import styles from './header.module.css';
import { FaTh, FaList, FaFilter } from 'react-icons/fa';

const Header = () => {
  return (
    <div className={styles.headerParent}>

      <div className={styles.header}>
        <div className={styles.part1}>

          <input type="text" placeholder="Search" className={styles.search} />
        </div>
        <div className={styles.part2}>

          <select className={styles.dropdown}>
            <option>Newly published</option>
          </select>
          <div className={styles.icons}>
            <FaTh className={styles.icon} />
            <FaList className={styles.icon} />
            <FaFilter className={styles.icon} />
          </div>
          <button className={styles.addCourse}>+ Add Course</button>
        </div>
      </div>

    </div>
    
  );
};

export default Header;
