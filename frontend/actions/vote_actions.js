import * as VoteAPIUtil from "../util/vote_api_util";
import { receiveQuestion } from "./question_actions";
import { receiveAnswer } from "./answer_actions";

export const createVote = vote => dispatch => (
  VoteAPIUtil.createVote(vote)
    .then(post => {
      if (vote.votable_type === "Question") {
        dispatch(receiveQuestion(post));
      } else {
        dispatch(receiveAnswer(post));
      }
    })
);

export const deleteVote = (id, postClass) => dispatch => (
  VoteAPIUtil.deleteVote(id)
    .then(post => {
      if (postClass === "questions") {
        dispatch(receiveQuestion(post));
      } else {
        dispatch(receiveAnswer(post));
      }
    })
);