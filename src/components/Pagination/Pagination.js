import React from 'react';
// import './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    // console.log(postPerpage)
    // console.log(totalUser)
    // console.log(paginate)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div >
             <ul className="pagination justify-content-center my-5">
                   {pageNumbers.map(number => (
                   <li key={number} className='page-item'> 
                    <a onClick={() => paginate(number)} href="#" className="page-link">
                    {number}
                    </a>
                  </li>
        ))}
    </ul></div>

       
    );
};

export default Pagination;