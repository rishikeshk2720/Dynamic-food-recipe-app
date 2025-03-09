import styles from "./fooditem.module.css";
export default function FoodItem({ setFoodId, food }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} alt={food.image} className={styles.itemImage} />
      <div className={styles.title}>
        <p className={styles.content}>{food.title}</p>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.itemButton}
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
