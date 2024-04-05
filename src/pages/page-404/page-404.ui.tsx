import { Link } from "react-router-dom";
import styles from "./page-404.module.css";
import { pathKeys } from "~shared/lib/react-router";

export function Page404() {
  return (
    <div className={styles["outer-wrapper"]}>
      <div className={styles["inner-wrapper"]}>
        <div>
          <h1 className="logo-font">페이지를 찾을 수 없습니다.</h1>
          <p>404 error</p>
          <Link to={pathKeys.home()}>홈으로 가기</Link>
        </div>
      </div>
    </div>
  );
}
