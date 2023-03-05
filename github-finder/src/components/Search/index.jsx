import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../store/user/userActions';

import styles from './Search.module.scss';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchValue, setSearchValue] = useState('yyx990803');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser(searchValue))
    }, [searchValue]);

    const handleChangeSearchValue = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchValue(searchInput);
        setSearchInput('');
    }

    return (
            <form className={styles['Search']} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Введите имя пользователя'
                    value={searchInput}
                    onChange={handleChangeSearchValue}
                />
                <button>НАЙТИ</button>
            </form>
    )
}

export default Search;