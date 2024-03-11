import { useState, useEffect } from 'react';

const About = () => {
  // State for total empty space and total slots
  const [emptySpace, setEmptySpace] = useState(0);
  const [totalSlots, setTotalSlots] = useState(0);

  useEffect(() => {
    // Fetch parking data from the API endpoint
    fetch('your-api-endpoint-url')
      .then(response => response.json())
      .then(data => {
        setEmptySpace(data.emptySpace);
        setTotalSlots(data.totalSlots);
      })
      .catch(error => console.error('Error fetching parking data:', error));
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  // Sample data for items available in the parking lot
  const parkingItems = [
    { id: 1, name: 'Car wash service', description: 'Get your car washed while you shop.' },
    { id: 2, name: 'Electric vehicle charging station', description: 'Charge your electric vehicle conveniently.' },
    { id: 3, name: 'Valet parking', description: 'Professional valet service available.' },
    // Add more items as needed
  ];

  return (
    <section className="px-4 py-8 md:px-8 lg:px-16 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <div>
        <label htmlFor="emptySpace" className="block text-sm font-medium text-gray-700">Total Empty Space:</label>
        <input
          type="text"
          id="emptySpace"
          value={emptySpace}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
        {/* <div>
          <label htmlFor="totalSlots" className="block text-sm font-medium text-gray-700">Total Slots:</label>
          <input
            type="text"
            id="totalSlots"
            value={totalSlots}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mt-8">
        {parkingItems.map(item => (
          <div key={item.id} className="bg-dark rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
