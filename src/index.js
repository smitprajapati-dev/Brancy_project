import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';
const App = () => {
  return (
    <div>
      <h1 className="bg-red-200">Hello world</h1>
      <h2>Hello world from h2</h2>
      <input type="checkbox" />
    </div>
  );
};
const Test = props => {
  console.log(props);
  return (
    <>
      <h1 className="bg-blue-200">{props.title}</h1>
      <h2 className="bg-green-200">{props.desc}</h2>
    </>
  );
};
// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
  <div>
    <App />
    <Test title="Hello world1" desc="smit1" />
    <Test title="Hello world2" desc="smit2" />
    <Test title="Hello world3" desc="smit3" />
    <Test title="Hello world4" desc="smit4" />
    <Test title="Hello world5" desc="smit5" />
  </div>,
);
