const React = require('react');

const Search = () => {
  return (
        <div id='searchs' className='search'>
          <input type='text' id='searching' placeholder='Sushi, Burgers...'/>
          <button type='submit' id='srch-btn'>Search</button>
        </div>
  );
}

module.exports = Search
