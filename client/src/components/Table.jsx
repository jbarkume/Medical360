import React from 'react';

// Expects cards to be a list of objects, and each object must have the exact same fields
const Table = ({ cards }) => {

    let fields = [];
    if (cards && cards.length > 0)
        fields = Object.keys(cards[0]);
    return (
    <div className="overflow-x-auto">
        <table className="min-w-full">
        <thead>
            <tr>
                {
                    fields.map((field, i) => {
                        return <th key={i} className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">{field}</th>
                    })
                }
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {cards && cards.map((card, index) => (
            <tr key={index}>
                {
                    fields.map((field, i) => {
                        return <td key={i} className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{card[field]}</td>
                    })
                }
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
};

export default Table;