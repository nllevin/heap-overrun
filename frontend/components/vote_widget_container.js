import { connect } from "react-redux";
import VoteWidget from "./vote_widget";
import { createVote, deleteVote } from "../actions/vote_actions";

const mapStateToProps = (state, ownProps) => {
  const post = state.entities[ownProps.postClass][ownProps.post.id];
  return {
    currentUserId: state.session.currentUserId,
    currentUserVote: post.currentUserVote,
    currentUserVoteId: post.currentUserVoteId
  };
};

const mapDispatchToProps = dispatch => ({
  createVote: vote => dispatch(createVote(vote)),
  deleteVote: (id, postClass) => dispatch(deleteVote(id, postClass))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteWidget);