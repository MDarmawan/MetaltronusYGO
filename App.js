import React, { useState, useEffect } from 'react';


export default function Metaltronus() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

function Button({onClick, children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function TextField({id, label}){
    return ""
}