import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import styles from './Repos.module.scss';
import SortByDate from './ReposSort/SortByDate';
import SortByName from './ReposSort/SortByName';
import SortByStars from './ReposSort/SortByStars';

const Repos = () => {
    return (
        <div className={styles['Repos']}>
            <h2 className={styles['Repos__title']}>Сортировка</h2>
            <div className={styles['Repos__sort']}>
                <NavLink to='sort=name' className={styles['Repos__link']}>ИМЯ</NavLink>
                <NavLink to='sort=stars' className={styles['Repos__link']}>ЗВЕЗДЫ</NavLink>
                <NavLink to='sort=date' className={styles['Repos__link']}>ДАТА</NavLink>
            </div>
            <Routes>
                <Route path='sort=name' element={<SortByName />} />
                <Route path='sort=stars' element={<SortByStars />} />
                <Route path='sort=date' element={<SortByDate />} />
            </Routes>
        </div>
    );
}

export default Repos;