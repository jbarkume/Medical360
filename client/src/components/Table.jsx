import React from 'react';

const Table = ({ cards }) => {
  let fields = cards && cards.length > 0 ? Object.keys(cards[0]) : [];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            {fields.map((field, i) => (
              <th key={i} className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cards.map((card, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#EDF2FB' : '#ABC4FF' }}>
              {fields.map((field, i) => {
                // Custom rendering for 'More Info' button if necessary
                // Other cells just display the value
                return (
                  <td key={i} className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    {field === 'More Info' ? (
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => console.log('Info for:', card.Name)}
                      >
                        Info
                      </button>
                    ) : (
                      card[field]
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
