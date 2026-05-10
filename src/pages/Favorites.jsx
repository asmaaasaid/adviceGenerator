import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import styles from './Favorites.module.css'

function Favorites() {
  const { favorite } = useContext(AppContext);
console.log(favorite);

  const navigate = useNavigate();

  return (
    <section className="">
      <div className={styles.favHeader}>
        <h3>Favorite Advice</h3>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      {favorite.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorite.map((item, index) => (
          <div key={item.id} className={styles.favAdvice}>
            <small>
              {index + 1}. {item.advice}
            </small>
          </div>
        ))
      )}
    </section>
  );
}

export default Favorites;