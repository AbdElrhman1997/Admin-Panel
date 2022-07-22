import React from 'react';
import Employee1 from '../../data/avatar.jpg';
import Employee2 from '../../data/avatar3.png';
import Employee3 from '../../data/avatar4.jpg';

const Employee = () => {
    let Employees=['James','John','Hamad','James','John','Hamad','James','John','Hamad'];
    let ImgEmployee=[Employee1,Employee2,Employee3];    
    let Designation=['Sales Representative','Hr','Marketing Head'];
    let EmployeeID=[1,2,3];
    return (
        <div>
            <span><img src={Employee1} /></span>
            <span>{Employees[0]}</span>
            <span>{Employees[0]}</span>
            <span>USA</span>
            <span>1/2/2022</span>
            <span>Carson</span>
            <span>{EmployeeID[0]}</span>
        </div>
    )
}

export default Employee;








// rows.map((e)=>{
//     return(
//         <tr key={Math.floor(Math.random()*100)} className='flex items-center justify-center'>
//             <td></td>
//             <td className='text-sm'>{employees[e]==='James'?Designation[0]:employees[e]==='John'?Designation[1]:employees[e]==='Hamad'?Designation[2]:''}</td>
//             <td className='flex items-center justify-center'><GoLocation/>USA</td>
//             <td>{e+1}/2/2022</td>
//             <td>Carson</td>
//             <td>{employees[e]==='James'?EmployeeID[0]:employees[e]==='John'?EmployeeID[1]:employees[e]==='Hamad'?EmployeeID[2]:''}</td>
//         </tr>
//     )
// })