import React from 'react';
import styles from '../styles/Input.module.css'

export default function Input({ label, placeholder, cssClass, taskName, setTaskName, projectName, setProjectName }) {
    return (
        <span className={cssClass}>

            <label htmlFor={label}>{label}</label>
            <input
                value={label == "Project Name" ? projectName : taskName}
                onChange={(e) => label == "Project Name" ? setProjectName(e.target.value) : setTaskName(e.target.value)} type="text" name={label} placeholder={placeholder} required />
        </span>
    )
}
