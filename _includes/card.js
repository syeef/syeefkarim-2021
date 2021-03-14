import styles from "./card.module.scss";

export default function Card({ logo, title, description, href }) {
  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <img src={logo}></img>
        <h2>{title ?? "Title"}</h2>
        <p>{description ?? "Brief description about the project."}</p>
        <a href={href ?? "#"} target="_blank">
          Check it out
        </a>
      </div>
      <div className={styles.visuals}>
        <img src="../images/Trast_web.svg"></img>
      </div>
    </div>
  );
}
