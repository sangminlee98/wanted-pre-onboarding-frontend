import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import React from "react";

type NavbarProps = {
  authState: boolean;
};

function BeforeLogin() {
  return (
    <div className={styles.buttonWrapper}>
      <Link to="/signin">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </div>
  );
}
function AfterLogin() {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <div className={styles.buttonWrapper}>
      <Link to="/todo">투두</Link>
      <button className={styles.logoutButton} onClick={onLogout}>
        로그아웃
      </button>
    </div>
  );
}

export function Navbar({ authState }: NavbarProps) {
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.innerWrapper}>
        <Link to="/">
          <h1 className={styles.title}>TODO</h1>
        </Link>
        {authState ? <AfterLogin /> : <BeforeLogin />}
      </div>
    </div>
  );
}

export default React.memo(Navbar);
