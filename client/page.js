const React = require('react');
const Search = require('./search.js');

const App = () => {
  return (
    <div id='pageview'>
      <div className='active'>
        <Search/>
      </div>
      <div id='results'></div>
    </div>
  );
}

module.exports = App
