import React from 'react';

const ChatPage = () => {
  return (
    <div className="flex h-screen" style={{ backgroundColor: '#CAD6FF' }}>
      <Sidebar />
      <ChatArea />
    </div>
  );
};

const Sidebar = () => {
  // For demonstration purposes, static groups and people are used
  const groups = ['Cardiology', 'Nurses', 'Nurse Ashe, Dr. Bob'];
  const people = ['Peter', 'Unknown', 'Mary'];

  return (
    <div className="w-1/4  p-5 border-r overflow-y-auto" style={{ backgroundColor: '#CAD6FF' }}>
      <div className="p-2">
        <input className="w-full p-2 rounded border" placeholder="Search" />
      </div>
      <div className="mt-4 bg-white">
        <h3 className="font-bold text-lg">Groups</h3>
        {groups.map((group, index) => (
          <div key={index} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded">
            <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center text-white text-sm">
              {group[0]}
            </div>
            <p className="ml-2">{group}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-white">
        <h3 className="font-bold text-lg">People</h3>
        {people.map((person, index) => (
          <div key={index} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded">
            <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center text-white text-sm">
              {person[0]}
            </div>
            <p className="ml-2">{person}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChatArea = () => {
  return (
    <div className="w-3/4 flex flex-col">
      <div className="p-5 border-b flex items-center">
        <div className="rounded-full h-8 w-8 bg-blue-500 flex items-center justify-center text-white text-sm">P</div>
        <h2 className="ml-2">Peter</h2>
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        {/* Messages will be dynamic, but here are static examples */}
        <div className="rounded px-4 py-2 bg-blue-100 max-w-xs mb-2">Hey There!</div>
        <div className="rounded px-4 py-2 bg-blue-300 max-w-xs mb-2 self-end">Hello!</div>
      </div>
      <div className="p-4 border-t">
        <input className="w-full p-2 rounded border" placeholder="Type your message here..." />
      </div>
    </div>
  );
};

export default ChatPage;
