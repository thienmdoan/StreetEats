const React = require('react')
const { connect } = require('react-redux')
const { saveReview, newReviewUpdated } = require('./actions')

const NewReview = ({ newReview, handleChange, handleSubmit }) =>
  <form onSubmit={ handleSubmit }>
    <div className='form-group'>
      <textarea
        className='form-control'
        onChange={ handleChange }
        rows='6'
        value={ newReview }
        required/>
    </div>
    <button className='btn btn-success' type='submit'>Save</button>
  </form>

const mapState = ({ newReview }) => ({ newReview })

const mapDispatch = dispatch => ({
  handleChange: event => {
    const { value } = event.target
    dispatch(newReviewUpdated(value))
  },
  handleSubmit: event => {
    event.preventDefault()
    dispatch(saveNote())
  }
})

module.exports = connect(mapState, mapDispatch)(NewReview)
