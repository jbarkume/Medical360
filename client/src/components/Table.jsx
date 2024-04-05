const Table = ({ cards, isAdmin }) => {
    let fields = cards && cards.length > 0 ? Object.keys(cards[0]) : [];
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            {/* Table headers */}
          </thead>
          <tbody>
            {cards.map((card, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#EDF2FB' : '#ABC4FF' }}>
                {/* Data cells */}
                {fields.map((field, i) => (
                  <td key={i} className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    {card[field]}
                  </td>
                ))}
                <td className="px-7 py-4 whitespace-no-wrap text-sm leading-5 text-center">
                  <div className={`inline-flex rounded-md shadow-sm ${!isAdmin && "justify-center w-full"}`} role="group"> {/* Adjusting div based on isAdmin */}
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                      onClick={() => console.log('Info for:', card.Name)}
                    >
                      Info
                    </button>
                    {isAdmin && (
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                        onClick={() => console.log('Deleting:', card.Name)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
export default Table;