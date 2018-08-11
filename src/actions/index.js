//Action creators are functions that return an action,
//an action is just an object that flows through all the different
//reducers, reducers can then use that action to produce a different value
//for a particular piece of state



export function selectBook(book) {
  console.log("A book has been selected:", book.title)
}
