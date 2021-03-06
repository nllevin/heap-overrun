import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

// For testing only:
///////////////////

document.addEventListener("DOMContentLoaded", () =>{
  let preloadedState;
  if (window.currentUser) {
    const currentUser = window.currentUser;
    preloadedState = {
      entities: {
        users: { [currentUser.id]: currentUser }
      },
      session: { 
        currentUserId: currentUser.id,
        filteredQuestionIds: []
      }
    };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  // For testing only:
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ////////////////////
});