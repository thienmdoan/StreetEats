const { createStore, combineReducers, applyMiddleware } = require('redux')
const { default: thunk } = require('redux-thunk')

const reviews = (state = [], action) => {
  switch (action.type) {
    case 'REVIEW_LOADED':
      return action.reviews
    case 'REVIEW_SAVED':
      return state.concat(action.review)
    default:
      return state
  }
}

const newReviews = (state = '', action) => {
  switch (action.type) {
    case 'NEW_REVIEW_UPDATED':
      return action.value
    case 'REVIEW_SAVED':
      return ''
    default:
      return state
  }
}

const reducer = combineReducers({ reviews, newReviews })

const store = createStore(reducer, applyMiddleware(thunk))

module.exports = store
