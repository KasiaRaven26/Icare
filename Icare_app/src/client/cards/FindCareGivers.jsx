import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAvailableCareGivers } from "../../store/newIndex";
import "./FindCareGivers.css";

const FindCareGivers = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => {
    return state.availableCareGivers;
  });

  useEffect(() => {
    dispatch(fetchAvailableCareGivers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const rows = data.map((careGiver) => {
    
    return (
      <tr key={careGiver.id}>
        <td>{careGiver.name}</td>
        <td>{careGiver.age}</td>
        <td>{careGiver.location}</td>
        <td>{careGiver.experience}</td>
        <td>{careGiver.availability}</td>
        <td>{careGiver.resume}</td>
        <td>{careGiver.email}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>location</th>
            <th>experience</th>
            <th>availability</th>
            <th>resume</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default FindCareGivers;
