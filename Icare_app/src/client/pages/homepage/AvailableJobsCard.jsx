import styles from "./AvailableJobsCard.module.css";

const AvailableJobsCard = () => {
  const handleClick = () => {console.log("button ")} 
  const handleFilter = () => {console.log("filter")}
  
  return (
  
    <div className={styles.card}>
      <h1 className={styles.header}>available caregivers</h1>
      <div className={styles.content}>
        <p>There are 3 available caregivers near you...</p>
        <table className={styles.styledTable}>
          <thead>
            <tr>
              <th>Availability</th>
              <th>Distance</th>
              <th>Salary</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Now</td>
              <td>10 km</td>
              <td>£25 / h </td>
              <td>Not contacted</td>
            </tr>
            <tr>
              <td>Now</td>
              <td>10 km</td>
              <td>£25 / h </td>
              <td>Not contacted</td>
            </tr>
            <tr>
              <td>Now</td>
              <td>10 km</td>
              <td>£25 / h </td>
              <td>Not contacted</td>
            </tr>
          </tbody>
        </table>{" "}
       <button  className={styles.searchbutton} onClick={handleClick}>find caregivers</button>
        <button className={styles.filters} onClick={handleFilter}>change filters</button>
      </div>
    </div>
  );
};

export default AvailableJobsCard;
