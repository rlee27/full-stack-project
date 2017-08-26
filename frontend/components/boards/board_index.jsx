import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.boardDetails = this.boardDetails.bind(this);
  }

  componentDidMount() {
    return this.props.getUserBoards(this.props.userId);
  }

  boardDetails() {
    return (this.props.userBoards.map((board) => {
      return(
        <li key={board.id}>
          <button>
            <Link to={`/${this.props.userId}/${board.title.split(" ").join("-")}`}>
              {board.title}
            </Link>
          </button>
        </li>
      );
    }));
  }

  render() {
    return (
      <ul className="board-index">
        {this.boardDetails()}
      </ul>
    );
  }
}

export default BoardIndex;
