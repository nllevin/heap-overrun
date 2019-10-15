import React from "react";
import { withRouter } from "react-router-dom";

class VoteWidget extends React.Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  createVote(voteDirection) {
    const { post, postClass, createVote, currentUserId } = this.props;
    createVote({
      voter_id: currentUserId,
      votable_id: post.id,
      votable_type: postClass === "questions" ? "Question" : "Answer",
      up: voteDirection === "up"
    });
  }

  handleVote(voteDirection) {
    const { currentUserVoteId, currentUserId, deleteVote, currentUserVote, postClass } = this.props;
    return () => {
      if (currentUserVoteId) {
        deleteVote(currentUserVoteId, postClass).then(() => {
          if (currentUserVote !== voteDirection) {
            this.createVote(voteDirection);
          }
        })
      } else if (currentUserId) {
        this.createVote(voteDirection);
      } else {
        this.props.history.push("/login");
      }
    };
  }

  render() {
    const { post, currentUserVote } = this.props;
    let upVoteClass, downVoteClass;
    if (currentUserVote === "up") {
      upVoteClass = "up-arrow voted";
      downVoteClass = "down-arrow";
    } else if (currentUserVote === "down") {
      upVoteClass = "up-arrow";
      downVoteClass = "down-arrow voted";
    } else {
      upVoteClass = "up-arrow";
      downVoteClass = "down-arrow";
    }

    return (
      <aside className="vote-box">
        <i className={upVoteClass} onClick={this.handleVote("up")}></i>
        <span>{post.votes}</span>
        <i className={downVoteClass} onClick={this.handleVote("down")}></i>
      </aside>
    );
  }
}

export default withRouter(VoteWidget);