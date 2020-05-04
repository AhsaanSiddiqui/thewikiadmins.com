import React from 'react'

export default function BannerContent({children, title, subtitle, forclass}) {
    return (
        <div className={forclass}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
