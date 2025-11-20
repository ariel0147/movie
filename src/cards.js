import React from 'react';
import styles from "./cards.module.css";

function Cards({data}) {
    return (
        <div className= {styles.card}>
            {data.map((item, index) => (
                <div key={index}>
                    <h2  >{item.movie}</h2>
                    <h4 >{item.rating}</h4>
                    <h4>
                        {item.actors.join(", ")}
                    </h4>
                </div>
            ))}

        </div>
    );
}

export default Cards;