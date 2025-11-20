import React, { useState } from "react";
import Cards from "./cards";
import Table from "./table";
import styles from "./show.module.css";

function Show({ data }) {
    const [showCards, setShowCards] = useState(false);

    const toggleView = () => {
        setShowCards((prev) => !prev);
    };

    return (
        <div>
            {showCards ? <Cards data={data} /> : <Table data={data} />}
            <button className={styles.button} onClick={toggleView}>
                {showCards ? "Show Table" : "Show Cards"}
            </button>
        </div>
    );
}

export default Show;
