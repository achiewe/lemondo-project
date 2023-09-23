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
          <li className={styles.secondNavItem}> ჩვენს შესახებ</li>
          <li className={styles.secondNavItem}> ფასები</li>
          <li className={styles.secondNavItem}> ბლოგი</li>
          <li className={styles.secondNavItem}> დახმარება</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDesk;
