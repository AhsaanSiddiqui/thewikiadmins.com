import React from 'react'

export default function Banner({children, heroclass}) {
    return (
        <section className={heroclass}>
            {children}
            
        </section>
    )
}
