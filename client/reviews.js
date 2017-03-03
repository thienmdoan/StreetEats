const React = require('react')
const { connect } = require('react-redux')

const ReviewsList = ({ notes }) =>
  <ul className='hidden'>
    { reviews.map(({ id, timestamp, text }) =>
        <li key={ id }>
          <span className='small'>{ new Date(timestamp).toDateString() }</span>
          <p>{ text }</p>
        </li>
      ) }
  </ul>

const mapState = ({ reviews }) => ({ reviews })

module.exports = connect(mapState)(ReviewsList)
