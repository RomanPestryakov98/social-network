import './Pagination.css';
import React, { useState } from 'react';

function Pagination({ portionSize = 10, ...props }) {
	const pagesCount = Math.ceil(props.totalCount / props.pageSize);
	const pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className='pagination'>
			{portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }} className='pagination__btn'>prev</button>}
			<ul className='pagination__list'>
				{pages
					.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map((p, index) => {
						return <li onClick={() => { props.handlePage(p) }} className={`pagination__page ${props.currentPage === p ? 'pagination__page_active' : ''}`} key={index}>{p}</li>
					})}
			</ul>
			{portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }} className='pagination__btn'>next</button>}

		</div>
	);
}

export default Pagination;


