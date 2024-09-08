import './Layout.css';
import React from "react";

type LayoutProps = {
    children: any
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <h1>PROJECTS OVERVIEW</h1>
            <div className="layout-body">
                <div className="left-nav">
                    <h2>Navigation</h2>
                    <ul className="nav-list">
                        <li className="nav-item">First</li>
                        <li className="nav-item">Second</li>
                        <li className="nav-item">Third</li>
                        <li className="nav-item">Fourth</li>
                    </ul>
                </div>
                <div className="body-container">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;