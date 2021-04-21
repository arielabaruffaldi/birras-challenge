import React from 'react';
import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className={styles.Search}>
      <input type="text" className={styles.inputStyle} placeholder="Buscar..." />
      <BiSearch></BiSearch>
    </div>
  );
}

export default Search;