//all reducers get two arguments, current state, and action.

//State argument is not refering to the application state, only
//the state this reducer is responsible for
export default function(state =  null,action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }

  return state;//base case
}
