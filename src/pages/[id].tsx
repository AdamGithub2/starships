import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import bg from "../../public/background2.jpg";

const Starship = () => {
  const router = useRouter();
  console.log(router.query);
  const data = router.query;
  const { name, model, manufacturer, Corporation } = router.query;
  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        resize: "both",
      }}
    >
      <div className={styles.TitleBackground}>
        <h1>{name}</h1>
      </div>
      <div className={styles.background}>
        <div className="container">
          {Object.entries(data).map(([key, value]) => {
            return (
              <div className={styles.details}>
                <div className="row">
                  <div className="col col-lg-6">
                    <h4>{key.replaceAll("_", " ").toUpperCase()}</h4>
                  </div>
                  <div className="col-md-auto">{value}</div>
                  <hr className="solid"></hr>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Starship;
