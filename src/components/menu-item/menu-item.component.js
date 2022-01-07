import React from "react";
import  "./menu-item.styles.scss";
import {useNavigate} from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {

    let navigate = useNavigate();
    return (
        <div
            className={`menu-item ${size}`}
            onClick={() => navigate(linkUrl)}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}/>
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export  default MenuItem;