import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.employee.id}?set=set5&size=180x180`} alt="employee"/>
        <h2> {props.employee.name} </h2>
        <p> {props.employee.email} </p>
    </div>
)