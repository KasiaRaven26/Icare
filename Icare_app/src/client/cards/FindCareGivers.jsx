import Card from "../Card"
import styles from "./FindCareGivers.module.css"


const FindCareGivers = () => {
    return (
        <Card> 
           <table>
                 <thead>
                    <tr>
                        <th>name</th> 
                        <th>age</th>
                        <th>location</th>
                        <th>experience</th>
                        <th>availability</th>
                    </tr>
                 </thead> 
                 <tbody>
                    <tr>
                        <td>Margharet Kirwan</td>
                        <td>60</td>
                        <td>Poole</td>
                        <td>5 years</td>
                        <td>immediately</td>
                    </tr>
                    <tr>
                        <td>Magdalena Kruk</td>
                        <td>68</td>
                        <td>Warsaw</td>
                        <td>3 years</td>
                        <td>immediately</td>
                    </tr>
                    <tr>
                        <td>Adam Kirwan</td>
                        <td>31</td>
                        <td>Bristol</td>
                        <td>1 year</td>
                        <td>immediately</td>
                    </tr>
                     <tr>
                        <td>Kasia Kruk</td>
                        <td>26</td>
                        <td>Amsterdam</td>
                        <td>2 years</td>
                        <td>never</td>
                    </tr>
                 </tbody> 
             </table>
         </Card>
        
    )
}

export default FindCareGivers