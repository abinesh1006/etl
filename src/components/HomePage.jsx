import React from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
            >
                <h1 className="text-4xl font-bold text-blue-600 mb-2">Welcome to AQ</h1>
                <p className="text-lg text-blue-800">Ask your questions and get answers from experts!</p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delayChildren: 0.3,
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <FaQuestionCircle className="text-blue-600 text-3xl mb-2" />
                        <h3 className="text-xl font-bold text-blue-600 mb-1">Feature {i + 1}</h3>
                        <p className="text-blue-800">Description of feature {i + 1} goes here.</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
            >
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700">
                    Get Started
                </button>
            </motion.div>
        </div>
    );
};

export default HomePage;
