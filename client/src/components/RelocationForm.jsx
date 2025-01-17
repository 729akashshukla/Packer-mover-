import  { useState } from 'react';

const RelocationForm = () => {
  const [locationType, setLocationType] = useState('within');
  const [selectedCity, setSelectedCity] = useState('Delhi NCR');
  const [sourceLocation, setSourceLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cities = ['Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];

  const getLocationLabels = () => {
    switch (locationType) {
      case 'within':
        return { source: 'Shifting From', destination: 'Shifting To' };
      case 'between':
        return { source: 'Search Source City', destination: 'Search Destination City' };
      case 'truck':
        return { source: 'Pickup from', destination: 'Drop at' };
      default:
        return { source: '', destination: '' };
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const createRelocationRequest = async (relocationData) => {
      try {
        const response = await fetch("/api/r/relocation", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(relocationData),
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw errorData;
        }
    
        return await response.json();
      } catch (error) {
        throw error || { error: 'Network error' };
      }
    }

    try {
      const formData = {locationType,selectedCity, sourceLocation,destinationLocation,mobileNumber};

      const response = await createRelocationRequest(formData);
      console.log('Relocation request created:', response);
      
      
      if (response.success) {
        
        setSourceLocation('');
        setDestinationLocation('');
        setMobileNumber('');
        
        
        alert('Relocation request submitted successfully!');
      }

    } catch (error) {
      console.error('Error creating relocation request:', error);
      setError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  

  };

  const ErrorMessage = () => error ? (
    <div className="text-red-500 text-sm mt-2">
      {error}
    </div>
  ) : null;
  const SubmitButton = () => (
    <button type="submit" disabled={loading} className={`w-full py-3 px-4 bg-[#E94560] text-white rounded-lg transition-colors ${
        loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#d63d56]'}`} >
      {loading ? 'Processing...' : 'Check Prices'}
    </button>
  )


  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Where are you going to relocate?
      </h2>
      
      <div className="mb-6 bg-gray-100 p-1 rounded-lg inline-flex w-full">
        <button
          className={`flex-1 py-2 px-4 rounded-md transition-colors ${
            locationType === 'within'
              ? 'bg-[#5D4B8C] text-white'
              : 'text-[#8B8BA3]'
          }`}
          onClick={() => setLocationType('within')}
        >
          Within City
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-md transition-colors ${
            locationType === 'between'
              ? 'bg-[#5D4B8C] text-white'
              : 'text-[#8B8BA3]'
          }`}
          onClick={() => setLocationType('between')}
        >
          Between Cities
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-md transition-colors ${
            locationType === 'truck'
              ? 'bg-[#5D4B8C] text-white'
              : 'text-[#8B8BA3]'
          }`}
          onClick={() => setLocationType('truck')}
        >
          Rent Truck
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {(locationType === 'within' || locationType === 'truck') && (
          <div>
            <label className="block text-[#8B8BA3] mb-2">Select City</label>
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg appearance-none focus:outline-none focus:border-purple-500 bg-white"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        )}

        <div>
          <label className="block text-[#8B8BA3] mb-2">
            {locationType === 'within' ? 'Search your Locality' : 'Search your City'}
          </label>
          <div className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder={getLocationLabels().source}
                value={sourceLocation}
                onChange={(e) => setSourceLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="relative">
              <span className="absolute left-3 top-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder={getLocationLabels().destination}
                value={destinationLocation}
                onChange={(e) => setDestinationLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[#8B8BA3] mb-2">Mobile Number</label>
          <div className="flex">
            <div className="inline-flex items-center px-3 rounded-l-lg border border-r-0 bg-gray-50">
              <img
                src="/indian-flag.png"
                alt="Indian flag"
                className="w-6 h-4 mr-1"
              />
              <span>+91</span>
            </div>
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="flex-1 px-4 py-3 border rounded-r-lg focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
        <ErrorMessage/>
        <SubmitButton />
      </form>
    </div>
  );
};

export default RelocationForm;