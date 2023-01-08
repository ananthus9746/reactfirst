import './employees.css'


function Employes({name,age,salary}){

 // const {name,age,salary}=props


    
    return (
   

       
       <table>

       <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salar</th>
        </tr>

         <tr>
           <td>{name}</td>
           <td>{age}</td>
           <td>{salary}</td>
         </tr>
         
       </table>
        

    )
}

export default Employes