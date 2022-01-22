import React from 'react';
import './pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div >
             <ul className="pagination justify-content-center my-5">
                   {pageNumbers.map(number => (
                   <li key={number} className='page-item list ms-3'> 
                    <a onClick={() => paginate(number)} href="#" className="page-link">
                    {number}
                    </a>
                  </li>
                 ))}
             </ul>
        </div>
    );
};

export default Pagination;