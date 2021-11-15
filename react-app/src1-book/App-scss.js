import styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <div className={styles["react-2"]}>
        <div className={`${styles.box} ${styles.orange}`}>1</div>
        <div className={`${styles.box} ${styles.red}`}>2</div>
        <div className={`${styles.box} ${styles.blue}`}>3</div>
      </div>
    </>
  );
};

export default App;
