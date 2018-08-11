import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render() {
      return (
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      )
  }
}
//this state contains the array of books(BookList) and
//the activeBook.


function mapStateToProps(state) {
  //whatever is returned from this fuction will show up as props
  //inside of BookList
  return {
    books: state.books
  };
}

//anything returned from mapDispatchToProps will end up as props on the
//BookList container.
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, it should be passed to called
  //to all of the reducers.

  //the second selectBook is the actual action creator we imported at the top.
  return bindActionCreators({ selectBook: selectBook }, dispatch)
  //the first selectBook is the keyword that allows us to call
  //this.props.selectBook, which will call our action creator.
}

//Promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available
//as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
