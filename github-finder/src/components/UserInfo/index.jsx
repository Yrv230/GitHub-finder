import React from 'react';

import styles from './UserInfo.module.scss';
import unfinedAvatar from '../../assets/img/undefined.png';
import { useSelector } from 'react-redux';

const UserInfo = () => {
    const { user } = useSelector(state => state)


    const items = [
        {
            name: user.login
        },
        {
            name: 'Репозиториев: ',
            value: user.public_repos
        },
        {
            name: 'Создан: ',
            value: '1'

        },
        {
            name: 'Подписщиков: ',
            value: user.followers
        },
        {
            name: 'Подписок: ',
            value: user.following
        }
    ];

    return (
        <div className={styles['UserInfo']}>
            <div className={styles['UserInfo__left']}>
                <img src={user.avatar_url} alt="" />
                <a href={`https://github.com/${user.login}`}>ПОСЕТИТЬ</a>
            </div>
            <ul className={styles['UserInfo__list']}>
                {
                    items.map(item => (
                        <li className={styles['UserInfo__item']} key={item.name}>{item.name}<span>{item.value}</span></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserInfo;