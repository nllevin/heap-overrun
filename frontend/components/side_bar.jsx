import React from "react";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const url = "https://stackexchange.com/feeds/questions";
    // feednami.setPublicApiKey('f901719449c894e1f7e445c4f0fb917bbafc8c6f2f7c7df98ecb0abb79476420')
    feednami.load(url)
      .then(feed => this.setState({ entries: feed.entries }))
  }

  render() {
    if (!this.state.entries) {
      return null;
    }

    return (
      <div className="side-bar">
        <h3>Hot Network Questions</h3>
        <ul>
          {
            this.state.entries
              .filter(entry => !entry.link.includes("meta"))
              .map((entry, idx) => (
                <li key={idx}>
                  <i className="se-icon"></i>
                  <a href={entry.link}>{entry.title.split(" – ")[0]}</a>
                </li>
              ))
          }
        </ul>
        <a href="https://stackexchange.com/feeds/questions">
          <i className="rss-icon"></i>
          Question feed
        </a>
      </div>
    )
  }
};

//   {
//   for (let entry of feed.entries) {
//     console.log(entry.title.split(" – ")[0]);
//     console.log(entry.link);
//   }
// });
export default SideBar;