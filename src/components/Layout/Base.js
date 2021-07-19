import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'

const Base = props => (
    <div className="wrapper">
        <Header />

        <Sidebar />

        <section className="section-container">
            {props.children}
        </section>
      
    </div>
)

export default Base;
