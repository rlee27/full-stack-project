import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';
import NewBoardContainer from './new_board_container';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.boardDetails = this.boardDetails.bind(this);
  }

  boardDetails() {
    return (this.props.userBoards.map((board) => {
      return(
        <Link to={`/${this.props.userId}/${board.title.split(" ").join("-")}`}
        className="board-card"
        key={board.id}>
          {this.boardCover()}
          {this.boardInfo(board)}
        </Link>
      );
    }));
  }

  boardInfo(board) {
    return(
      <div className="board-info">
        <h3>
          {board.title}
        </h3>
      </div>
    );
  }

  boardCover() {
    return(
      <div className="board-cover">
        <img src={ window.staticImages.boardCover }></img>
      </div>
    );
  }

  protectBoardCreate() {
    if (this.props.currentUserId === parseInt(this.props.userId)) {
      return <NewBoardContainer />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <ul className="board-index">
        {this.protectBoardCreate()}
        {this.boardDetails()}
      </ul>
    );
  }
}

export default BoardIndex;
