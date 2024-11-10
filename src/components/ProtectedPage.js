import React, { useEffect, useState } from 'react';

const ProtectedPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/protected', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Protected Content</h1>
      <p>{data.message}</p>
    </div>
  );
};

export default ProtectedPage;
