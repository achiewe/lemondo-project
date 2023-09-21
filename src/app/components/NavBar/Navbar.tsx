import styles from "./Navbar.module.scss";

const Navbar = (): JSX.Element => {
  return (
    <ul className={styles.navbarMain}>
      <li className={styles.navbarList}> დომენი</li>
      <li className={styles.navbarList}> ტრანსფერი</li>
      <li className={styles.navbarList}> ჰოსტინგი</li>
      <li className={styles.navbarList}> Gmail</li>
      <li className={styles.navbarList}> ვებგვერდი</li>
      <li className={styles.navbarList}> დომენის მარკეტი</li>
      <li className={styles.navbarList}> ჩვენს შესახებ</li>
      <li className={styles.navbarList}> ფასები</li>
      <li className={styles.navbarList}> ბლოგი</li>
      <li className={styles.navbarList}> დახმარება</li>
    </ul>
  );
};

export default Navbar;
