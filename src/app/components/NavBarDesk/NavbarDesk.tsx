import styles from "./NavbarDesk.module.scss";

const NavbarDesk = (): JSX.Element => {
  return (
    <div className={styles.MainNavbar}>
      <hr className={styles.navHr} />
      <div className={styles.navbarList}>
        <ul className={styles.firstHalf}>
          <li className={styles.firstNavItem}> დომენი</li>
          <li className={styles.firstNavItem}> ტრანსფერი</li>
          <li className={styles.firstNavItem}> ჰოსტინგი</li>
          <li className={styles.firstNavItem}> Gmail</li>
          <li className={styles.firstNavItem}> ვებგვერდი</li>
          <li className={styles.firstNavItem}> დომენის მარკეტი</li>
        </ul>
        <ul className={styles.secondHalf}>
          <li className={styles.secondNavItem}> დომენი</li>
          <li className={styles.secondNavItem}> ტრანსფერი</li>
          <li className={styles.secondNavItem}> ჰოსტინგი</li>
          <li className={styles.secondNavItem}> Gmail</li>
          <li className={styles.secondNavItem}> ვებგვერდი</li>
          <li className={styles.secondNavItem}> დომენის მარკეტი</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDesk;
