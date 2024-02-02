import Card from "../Card"
import "./FindCareGivers.css"


const FindCareGivers = () => {
    return (
        <Card> 
           <table className="styled-table">
                 <thead>
                    <tr>
                        <th>NAME</th> 
                        <th>AGE</th>
                        <th>LOCATION</th>
                        <th>EXPERIENCE</th>
                        <th>AVAILABILITY</th>
                        <th>RESUME</th>
                        <th>E-MAIL</th>
                    </tr>
                 </thead> 
                 <tbody>
                    <tr>
                        <td>Margharet Kirwan</td>
                        <td>60</td>
                        <td>Poole</td>
                        <td>5 years</td>
                        <td>immediately</td>
                        <td> <a href= "./caregiver/resume"> view resume</a> </td>
                        <td>pizzamargherita@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Magdalena Kruk</td>
                        <td>68</td>
                        <td>Warsaw</td>
                        <td>3 years</td>
                        <td>immediately</td>
                        <td>-</td>
                        <td>lena.kruk@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Adam Kirwan</td>
                        <td>31</td>
                        <td>Bristol</td>
                        <td>1 year</td>
                        <td>immediately</td>
                        <td> <a href= "./"> view resume </a> </td>
                        <td>ajkirwan1@yahoo.com</td>
                    </tr>
                     <tr>
                        <td>Kasia Kruk</td>
                        <td>26</td>
                        <td>Amsterdam</td>
                        <td>2 years</td>
                        <td>never</td>
                        <td>-</td>
                        <td>raven2507@gmail.com</td>
                    </tr>
                 </tbody> 
             </table>
         </Card>
        
    )
}

export default FindCareGivers