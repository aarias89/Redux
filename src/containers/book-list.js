import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToProps)(BookList);
