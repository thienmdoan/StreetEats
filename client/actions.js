const reviewsLoaded = notes => ({ type: 'REVIEWS_LOADED', notes })

const loadReviews = () => dispatch => {
  fetch('/reviews', {
    headers: { 'Accept': 'application/json' }
  })
  .then(res => res.json())
  .then(reviews => dispatch(reviewsLoaded(reviews)))
}

const newReviewUpdated = value => ({ type: 'NEW_REVIEW_UPDATED', value })

const reviewSaved = review => ({ type: 'REVIEW_SAVED', review })

const saveReview = () => (dispatch, getState) => {
  const { newReviews } = getState()
  fetch('/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: newReview })
  })
  .then(res => res.json())
  .then(note => dispatch(noteSaved(note)))
}

module.exports = {
  reviewsLoaded,
  loadReviews,
  newReviewUpdated,
  saveReview,
  reviewSaved
}
