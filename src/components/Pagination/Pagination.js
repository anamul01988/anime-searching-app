import React from 'react';
import classes from './Pagination.module.css'

const Pagination = ({ postsPerPage, totalPosts }) => {

    // console.log(postPerpage)
    // console.log(totalUser)
    // console.log(paginate)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div >
             <ul className="pagination">
                   {pageNumbers.map(number => (
                   <li key={number} className='page-item'> <a href="!#" className="page-link" onClick={() =>(number)}></a> {number}
                  </li>
        ))}
    </ul></div>

       
    );
};

export default Pagination;