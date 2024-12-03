// App.jsx
import React, { useState } from 'react';
import UserCoins from './UserCoins';
import UserData from './UserData';

const App = () => {
    const [activeComponent, setActiveComponent] = useState('UserCoins');
    const [userData] = useState({ name: 'John Doe', email: 'john.doe@example.com' });
    const [coins] = useState(100);

    const handleSwipeLeft = () => {
        setActiveComponent('UserData');
    };

    const handleSwipeRight = () => {
        setActiveComponent('UserCoins');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full">
                <div className="swiper overflow-hidden relative">
                    <div className={`flex transition-transform duration-300 ease-in-out transform ${activeComponent === 'UserCoins' ? 'translate-x-0' : '-translate-x-full'}`}>
                        <UserCoins coins={coins} />
                        <UserData userData={userData} />
                    </div>
                </div>
                <div className="controls mt-4 flex justify-center">
                    <button onClick={handleSwipeLeft} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none">Swipe Left</button>
                    <button onClick={handleSwipeRight} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none">Swipe Right</button>
                </div>
            </div>
        </div>
    );
};

export default App;
