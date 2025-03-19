import styles from './coursecard.module.css';

const CourseCard = ({ duration, title, presenter, description, image }) => {
  return (
    <div className={styles.card}>

      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>

        <span className={styles.duration}>{duration}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.presentedBy}>Presented by {presenter}</p>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>Go to the course</button>
      </div>
    </div>
  );
};

export default CourseCard;
