import styles from "./card.module.scss";

export default function Card({
  logo,
  logoAltText,
  title,
  description,
  href,
  demoAltText,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <img src={logo} alt={logoAltText ?? "Logo Alt Text"}></img>
        <h2>{title ?? "Title"}</h2>
        <p>{description ?? "Brief description about the project."}</p>
        <a href={href ?? "#"} target="_blank" rel="noreferrer">
          Check it out
        </a>
      </div>
      <div className={styles.visuals}>
        <img
          src="../images/Trast_web.svg"
          alt={demoAltText ?? "Demo Alt Text"}
        ></img>
      </div>
    </div>
  );
}
