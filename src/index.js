import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} defaultRating={3} />
    <StarRating
      maxRating={5}
      size={24}
      color="red"
      messages={['Terrible', 'Bad', 'Not Bad', 'Good', 'Amazing']}
    />
  </React.StrictMode>
);
