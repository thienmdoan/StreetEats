const Reviews = require('./reviews.js');
const { loadReviews } = require('./actions')
const newReviews = require('./newReviews.js')
const React = require('react');

const Details = () => {
  return (
      <div id="restaurant-details" className="hidden">
        <Reviews/>
        <newReviews/>
      </div>
  );
}

module.exports = Details
