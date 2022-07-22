import React from 'react';
import Product1 from '../../data/product1.jpg';
import Product2 from '../../data/product2.jpg';
import Product3 from '../../data/product3.jpg';
import Product4 from '../../data/product4.jpg';
import Product5 from '../../data/product5.jpg';
import Product6 from '../../data/product6.jpg';
import Product7 from '../../data/product7.jpg';
import Product8 from '../../data/product8.jpg';
import Product9 from '../../data/product9.jpg';

import './Orders.scss';

const Orders = () => {
    let divo=[0,1,2,3,4,5,6,7,8];
    let Products=[Product1,Product2,Product3,Product4,Product5,Product6,Product7,Product8,Product9];    
    let Items=['Car','Sun Glass','Watch','Shoes','Head Phone','Fresh Tomatow','Ice Cream','Candy Gucci','Loly pop'];
    let CustomerName=['James','Omar','Hamad','John','Mehili','Roberto','Denay','Boten','Tramp'];
    let Prices=['95.99$','17.99$','39.99$','24.99$','19.99$','2.99$','1.99$','4.99$','0.99$'];
    let Status=['Canceled','Active','Complete','Reject','Active','Pending','Complete','Canceled','Pending'];
    let OrderId=[94543,43739,28736,59683,39238,57854,32872,87654,48587];
    let Locations=['USA','Egypt','Sudia','Delhi','Mosco','Italy','France','Russia','USA'];
    return (
        <div id='Orders' className='w-full h-fit'>
            <p className=' text-gray-500 font-bold'>Page</p>
            <p className=' font-bold text-2xl mb-3'>Orders</p>
            <table>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Item</th>
                        <th>Customer Name</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>Order Id</th>
                        <th>Locations</th>
                    </tr>
                </thead>
                <tbody>
                {
                    divo.map((e)=>{
                        return(
                            <tr>
                                <td><img src={Products[e]} alt="" /></td>
                                <td>{Items[e]}</td>
                                <td>{CustomerName[e]}</td>
                                <td>{Prices[e]}</td>
                                <td><span className={`${Status[e]==='Canceled'?'Canceled':Status[e]==='Active'?'Active':Status[e]==='Complete'?'Complete':Status[e]==='Reject'?'Reject':Status[e]==='Pending'?'Pending':''}`}>{Status[e]}</span></td>
                                <td>{OrderId[e]}</td>
                                <td>{Locations[e]}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Orders;