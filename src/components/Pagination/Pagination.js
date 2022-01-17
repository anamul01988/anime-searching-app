import React from 'react';
import classes from './Pagination.module.css'

const Pagination = ({ postPerpage, totalUser, paginate }) => {

    console.log(postPerpage)
    console.log(totalUser)
    console.log(paginate)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUser / postPerpage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div  className={classes.pagintaionArea}> <ul className={classes.pagination}>
        {pageNumbers.map(number => (
            <li key={number} className='page-item' onClick={() => paginate(number)}> {number}
            </li>
        ))}
    </ul></div>

       
    );
};

export default Pagination;