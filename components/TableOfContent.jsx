import React, { useState } from 'react';

const TableOfContent = ({ headings }) => {
    const [showContent, setShowContent] = useState(true);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    return (
        <nav className="mt-10 bg-neutral-300 dark:bg-neutral-900 p-4 rounded-lg">
            <h2 className="font-bold flex items-center justify-between">
                Table of Contents
                <button onClick={toggleContent} className="text-sm text-gray-500 focus:outline-none">
                    {showContent ? 'Hide' : 'Show'}
                </button>
            </h2>
            {showContent && (
                <ul className="mt-5 list-inside text-gray-900 dark:text-gray-300 space-y-1">
                    {headings.map((heading, index) => (
                        <li key={index} className={heading.level === 3 ? 'ml-4 hover:underline' : 'hover:underline'}>
                            <a className="flex items-center" href={`#${heading.id}`}>
                                {heading.level === 3 ? (
                                    <svg
                                        width="3"
                                        height="24"
                                        viewBox="0 -9 3 24"
                                        className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                                    >
                                        <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>
                                ) : (
                                    <svg className="text-slate-400 dark:text-slate-600 mr-2" width="3" height="3" viewBox="0 0 3 3">
                                        <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor"></circle>
                                    </svg>
                                )}
                                {heading.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default TableOfContent;
