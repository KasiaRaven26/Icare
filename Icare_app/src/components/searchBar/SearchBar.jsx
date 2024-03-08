import { FaSearch } from "react-icons/fa"
import styles from "./SearchBar.module.css";

export function SearchBar () {
    return (
        <form>
        <div className={styles.searchBar}><FaSearch style={{ margin: "10 0 0 10" }} size={20} /> <input type="text" placeholder="search" className={styles.input}></input> </div>
            </form>
    )
}