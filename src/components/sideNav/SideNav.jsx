import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideNavBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const sidebarRef = useRef(null); // Reference for the sidebar
    const toggleButtonRef = useRef(null); // Reference for the toggle button

    const buttons = [
        { name: 'Home', routeUrl: '/', icon: 'fa-solid fa-home' },
        { name: 'Quiz', routeUrl: '/ingestor/123', icon: 'fa-solid fa-exchange-alt' },
        { name: 'Trading', routeUrl: '/trading', icon: 'fa-solid fa-user-friends' },
        { name: 'Process', routeUrl: '/process', icon: 'fa-solid fa-briefcase' }
    ];

    // Toggle sidebar
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Handle click outside or on the sidebar
    const handleClickOutsideOrSidebar = (event) => {
        // Ignore click on the sidebar or toggle button
        if (
            sidebarRef.current && sidebarRef.current.contains(event.target) ||
            toggleButtonRef.current && toggleButtonRef.current.contains(event.target)
        ) {
            return;
        }

        // Collapse sidebar when clicking outside
        setIsCollapsed(true);
    };

    // Add and clean up the event listener
    useEffect(() => {
        if (!isCollapsed) {
            document.addEventListener('click', handleClickOutsideOrSidebar);
        } else {
            document.removeEventListener('click', handleClickOutsideOrSidebar);
        }

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener('click', handleClickOutsideOrSidebar);
        };
    }, [isCollapsed]);

    return (


                <div className="flex bg-gradient fixed top-0 left-0 h-full bg-slate-200 shadow-lg shadow-blue-500/50  z-20 pt-20" ref={sidebarRef}>
            {/* Side Navigation Links */}
            <nav
                className={`flex flex-col items-start transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-40'}`}
            >
                {buttons.map((button, index) => (
                    <Link
                        key={index}
                        to={button.routeUrl}
                        className="flex items-center w-full py-3 px-4 hover:text-blue-600 "
                        title={ button.name} // Add the tooltip on hover when expanded
                    >
                        <i className={`${button.icon} text-xl`}></i>
                        {!isCollapsed && <span className="ml-4 text-sm">{button.name}</span>}
                    </Link>
                ))}
            </nav>

            {/* Settings Icon with Arrow */}
            <div
                className={`flex items-center justify-between py-3 px-4  hover:text-blue-600 absolute bottom-5 w-full`}
            >
                <Link to="/settings" className="flex items-center" title="Settings">
                    <i className="fa-solid fa-cog text-xl"></i>
                    <span className={`${isCollapsed ? 'hidden' : ''} ml-2 text-sm`}>Settings</span>
                </Link>
                <button
                    onClick={toggleSidebar}
                    className="ml-2"
                    ref={toggleButtonRef} // Attach the ref to the button
                >
                    <i className={`fa-solid fa-arrow-${isCollapsed ? 'right' : 'left'} text-xl`}></i>
                </button>
            </div>
        </div>
    );
};

export default SideNavBar;
