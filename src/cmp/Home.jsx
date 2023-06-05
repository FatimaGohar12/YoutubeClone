import React from 'react';
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-5">
        {Array(12)
          .fill(0)
          .map((item, index) => (
            <div className="col-span-1" key={index}>
              <img
                src={`thumb/${index}.jpg`}
                alt={`Image ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Home;
