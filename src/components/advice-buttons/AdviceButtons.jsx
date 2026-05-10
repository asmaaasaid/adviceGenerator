import copy from "../../assets/copy-svgrepo-com.svg";
import successcopy from "../../assets/success-svgrepo-com.svg";
import dark from "../../assets/dark-svgrepo-com.svg";
import light from "../../assets/light-svgrepo-com.svg";
import loveOutline from "../../assets/love-outline-svgrepo-com.svg";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";

const AdviceButtons = () => {
  const {
    theme,
    setTheme,
    copied,
    setCopied,
    advice,
    favorite,
    toggleFavorite,
  } = useContext(AppContext);

  // copy advice to cliboard
  const copyAdviceToClipboard = () => {
    if (advice) {
      navigator.clipboard
        .writeText(advice.advice)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  //  toggle favorite icon
  const isFavorite = advice
    ? favorite.some((item) => item.id === advice.id)
    : false;
  return (
    <div className={styles.adviceButtons}>
      {/* fav and dark mode icons */}
      <div className={styles.darkFavIcon}>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <img src={light} alt="light mode icon" />
          ) : (
            <img src={dark} alt="dark mode icon" />
          )}
        </button>
        <span>
          <button onClick={() => advice && toggleFavorite(advice)}>
            {isFavorite ? (
              <svg
                width="25px"
                height="45px"
                viewBox="0 -4 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                    fill="#e81224"
                  ></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                width="25px"
                height="45px"
                viewBox="0 -4 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.styleToggle}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                    fill="currentColor"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </button>
          <Link to="/fav" className={styles.styleToggle}>
            {favorite.length}
          </Link>
        </span>
      </div>

      {/* copied icon */}
      <button className={styles.copyBtn} onClick={copyAdviceToClipboard}>
        {copied ? (
          <svg
            width="25"
            height="45"
            viewBox="-3.5 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.styleToggle}
          >
            <path
              stroke="currentColor"
              d="M4.63 15.638a1.028 1.028 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511.89.89 0 0 1-.088.004z"
            />
          </svg>
        ) : (
          <svg
            width="25"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.styleToggle}
          >
            <path
              d="M3 16V4C3 2.89543 3.89543 2 5 2H15M9 22H18C19.1046 22 20 21.1046 20 20V8C20 6.89543 19.1046 6 18 6H9C7.89543 6 7 6.89543 7 8V20C7 21.1046 7.89543 22 9 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AdviceButtons;
