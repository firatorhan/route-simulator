// FormPage.jsx
import CoordinateField from "./components/CoordinateField";
import styles from "./FormPage.module.css";
import { Icons } from "../../components/icons";

export default function FormPage() {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Welcome aboard!</h2>
          <p className={styles.description}>Let’s create your journey.</p>
        </div>

        <form className={styles.form}>
          <CoordinateField
            label="Start Point"
            name="lon"
            value={"xx"}
            icon={<Icons.flag />}
            onChange={() => console.log("change")}
          />
          <CoordinateField
            label="End point"
            name="lon"
            value={"yy"}
            onChange={() => console.log("change")}
          />
        </form>

        <button className={styles.button}>Go!</button>
      </div>
    </div>
  );
}
