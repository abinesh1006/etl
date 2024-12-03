// Coming.js

import React, { useState, useEffect } from 'react';
import { FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';

const Coming = () => {
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        // Simulate loading state
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);

    const handleSubscribe = () => {
        // Simulate subscription process
        setTimeout(() => {
            setSubscribed(true);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="max-w-md w-full md:max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">Coming Soon!</h1>
                <p className="text-gray-700 text-lg mb-6">Our awesome new website is coming soon. Stay tuned for updates!</p>

                {/* Social icons */}
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FaTelegram size={32} style={{ color: '#0088cc' }} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FaInstagram size={32} style={{ color: '#E1306C' }} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FaYoutube size={32} style={{ color: '#FF0000' }} />
                    </a>
                </div>

                {/* Email input and subscribe button */}
                {!subscribed ? (
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 mb-4 md:mb-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className="w-full md:w-auto bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                            onClick={handleSubscribe}
                        >
                            Notify Me
                        </button>
                    </div>
                ) : (
                    <p className="text-green-600 font-semibold mt-4">Thank you for subscribing!</p>
                )}
            </div>
        </div>
    );
}

export default Coming;
