import React from 'react';

const Header = (props) => {

    // Array for tab selection
    const tabs = ['About', 'Game Development','Web Development', 'Resume']

    return (
        <header>
            <section className="title-adjust">
            <h1>
                Cory Calaway
            </h1>
        

            <nav>
                <ul className="nav-align">
                    {tabs.map(tab => (
                        <li className="nav-item" key={tab}>
                            <a className="nav-text" onClick={() => props.handleActivePage(tab)}> {tab}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            </section>
        </header>
    )
}

export default Header