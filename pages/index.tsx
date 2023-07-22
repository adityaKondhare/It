import type { NextPage } from "next";
import styles from "./index.module.css";
const LoginRegister: NextPage = () => {
  return (
    <div className={styles.loginregister}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-38@2x.png" />
        <div className={styles.formtitleParent}>
          <div className={styles.formtitle}>
            <div className={styles.formTitle}>Login</div>
            <div className={styles.sedTortorSed}>
              Resume your journey.
            </div>
          </div>
          <div className={styles.forminputParent}>
            <div className={styles.forminput}>
              <div className={styles.labelTitle}>E-Mail</div>
              <input type="text" placeholder="Email" className={styles.placeholderContentWrapper} />
              {/* <div className={styles.placeholderContentWrapper}>
                <div className={styles.labelTitle}></div>
              </div> */}
            </div>
            <div className={styles.forminput}>
              <div className={styles.labelTitle}>Password</div>
              <input type="text" placeholder="Password" className={styles.placeholderContentWrapper} />
              {/* <div className={styles.placeholderContentWrapper}>
                <div className={styles.labelTitle}>Placeholder content</div>
              </div> */}
            </div>
            <div className={styles.forgotPassword}>Forgot password?</div>
            <div className={styles.button}>
              <div className={styles.buttonTitle}>Login</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.lineParent}>
              <div className={styles.frameItem} />
              <div className={styles.orWrapper}>
                <div className={styles.labelTitle}>or</div>
              </div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.button1}>
              <div className={styles.buttonTitle}>Register now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
