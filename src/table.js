import React from 'react';
import styles from './table.module.css';

function Table({data}) {
    return (
        <div className={styles.t}>
            <table border="1"  className={styles.table}>
                <thead >
                <tr>
                    <th>movie🎥</th>
                    <th>rating⭐</th>
                    <th>actors🙎🏻‍♂️</th>
                </tr>
                </thead>
                 <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td  >{item.movie}</td>
                        <td >{item.rating}</td>
                        <td>
                            {item.actors.join(", ")}
                        </td>
                    </tr>
                ))}
                 </tbody>
            </table>
        </div>
    );
}

export default Table;