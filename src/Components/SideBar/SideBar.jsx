import React, { useState } from 'react';
import {FaChartArea,FaChartBar,FaMoneyCheckAlt} from 'react-icons/fa';
import {AiOutlineShoppingCart,AiOutlineCalendar} from 'react-icons/ai';
import {TiShoppingBag} from 'react-icons/ti';
import {BsFillPeopleFill,BsKanban,BsBarChartFill} from 'react-icons/bs';
import {IoIosPeople} from 'react-icons/io';
import {BiEdit,BiColorFill,BiLineChart} from 'react-icons/bi';
import {HiChartPie} from 'react-icons/hi';
import {GiBallPyramid} from 'react-icons/gi'
import './SideBar.scss';
// SiShopware

const SideBar = () => {
    const [displayBar,setDisplayBar]=useState(false);

    return (
        <div id='SideBar' className={`p-4 h-screen bg-white shadow-2xl mr-1 overflow-y-auto ${displayBar?'sideBar':'noneBar'}`} onMouseEnter={()=>{setDisplayBar(true)}} onMouseLeave={()=>{setDisplayBar(false)}}>
            <ul className='flex flex-col text-sm gap-2'>
                <p className=' font-bold text-3xl'>Admin Panel</p>
                <p className=' text-gray-400'>DASHBOARD</p>
                <a href='/'><TiShoppingBag/><span>Ecommerce</span></a>
                <p className=' text-gray-400'>PAGES</p>
                <a href='/Orders'><AiOutlineShoppingCart/><span>Orders</span></a>
                <a href='/Employees'><BsFillPeopleFill/><span>Employees</span></a>
                <a href='/Customers'><IoIosPeople/><span>Customers</span></a>
                <p className=' text-gray-400'>APPS</p>
                <a href='/Calnder'><AiOutlineCalendar/><span>Calnder</span></a>
                <a href='/Kanban'><BsKanban/><span>Kanban</span></a>
                <a href='/Editor'><BiEdit/><span>Editor</span></a>
                <a href='/ColorPicker'><BiColorFill/><span>ColorPicker</span></a>
                <p className=' text-gray-400'>CHARTS</p>
                <a href='/Line'><BiLineChart/><span>Line</span></a>
                <a href='/Area'><FaChartArea/><span>Area</span></a>
                <a href='/Bar'><FaChartBar/><span>Bar</span></a>
                <a href='/Pie'><HiChartPie/><span>Pie</span></a>
                <a href='/Financial'><FaMoneyCheckAlt/><span>Financial</span></a>
                <a href='/ColorMapping'><BsBarChartFill/><span>ColorMapping</span></a>
                <a href='/Pyramid'><GiBallPyramid/><span>Pyramid</span></a>
            </ul>
        </div>
    )
}

export default SideBar;