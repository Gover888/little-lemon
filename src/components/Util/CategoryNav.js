import React, {memo} from 'react';
import './CategoryNav.scss'

const CategoryNav = memo(({categoryNavData}) => {
    return (
        <div className='category-nav-container'>
            {/*to receive category nav data from different other-pages*/}
            {categoryNavData && categoryNavData.map(item =>
                <nav key={item} className='category-nav'>{item}</nav>)}
        </div>
    );
});

export default CategoryNav;
