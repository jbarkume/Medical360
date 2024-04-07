const Table = ({ cards, isAdmin }) => {
  let fields = cards && cards.length > 0 ? Object.keys(cards[0]) : [];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          {/* Table headers */}
          <tr>
            {fields.map((field, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                {field}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#EDF2FB' : '#ABC4FF' }}>
              {fields.map((field, i) => (
                <td key={i} className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  {card[field]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-right">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  {/* Info button for all users */}
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-l"
                    onClick={() => console.log('Info for:', card.Room)}
                  >
                    Info
                  </button>
                  {/* Conditionally rendered Edit and Delete buttons for admins */}
                  {isAdmin && (
                    <>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3"
                        onClick={() => console.log('Editing:', card.Room)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-r"
                        onClick={() => console.log('Deleting:', card.Room)}
                      >
                        Delete
                      </button>
                    </>
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
