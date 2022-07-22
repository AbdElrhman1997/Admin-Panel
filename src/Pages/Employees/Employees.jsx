import React, { useEffect, useState } from 'react';
import {GoLocation} from 'react-icons/go';
import {AiOutlineSearch} from 'react-icons/ai';
import './Employees.scss';

const Employees = () => {
    //Items of Page
    let divo=[];
    let newEmployees=[];
    //Logic Of Component
    const [employees,setEmployees] =useState(['James','John','Hamad','James','John','Hamad','James','John','Hamad']);
    const [searchResults,setSearchResults]=useState([]);
    const [rows,setRows] =useState([0,1,2,3,4,5,6,7,8]);
    
        const handleChange=(ele)=>{
            if(!ele.target.value) return setSearchResults(Employees);

            const resultsArray=Employees.filter((e)=>{
                e.includes(ele.target.value);
            })

            setSearchResults(resultsArray);
            setRows([...rows.slice(0,resultsArray.length)]);
            console.log(resultsArray);
            // newEmployees=Employees.filter((e)=>{
            //     return (e[0]===ele.target.value[0]);
            // })
            // setRows([...rows.slice(0,employees.length)]);
            // console.log(newEmployees,divo,employees.length);
        }; 
    
        
    return (
        <div id='Employees'>
            <p className=' text-gray-500 font-bold'>Page</p>
            <p className=' font-bold text-2xl mb-3'>Employees</p>
            <table>
                <thead>
                    <tr>
                        <AiOutlineSearch className='icon'/>
                        <input type="text" placeholder='Search' onChange={handleChange}/>
                    </tr>
                    <tr className='flex items-center justify-center'>
                        <th>Employee</th>
                        <th>Designation</th>
                        <th>Country</th>
                        <th>Hire Date</th>
                        <th>Reports To</th>
                        <th>Employee ID</th>
                    </tr>
                </thead>
                <tbody key={Math.floor(Math.random()*100)}>

                </tbody>
            </table>
        </div>
    )
}

export default Employees;