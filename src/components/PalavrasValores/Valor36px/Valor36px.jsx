/* eslint-disable react/prop-types */
import styles from "./Valor36px.module.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Valor36px(props) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setPosition({
          x: Math.floor(Math.random() * window.innerWidth),
          y: Math.floor(Math.random() * window.innerHeight)
        });
    }, []);
    
    return (
        <div className= {styles.box} style={{ left: position.x, top: position.y }}>
        <p className= {styles.palavra}>{ props.palavra }</p>
        </div>
    )
}

export default Valor36px;