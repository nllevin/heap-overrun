import React from "react";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const url = "https://stackexchange.com/feeds/questions";
    feednami.setPublicApiKey('f901719449c894e1f7e445c4f0fb917bbafc8c6f2f7c7df98ecb0abb79476420')
    feednami.load(url)
      .then(feed => this.setState({ entries: feed.entries }));
  }

  render() {
    if (!this.state.entries) {
      return null;
    }

    return (
      <div className="side-bar">
        Hot Network Questions
        <ul>
          {
            this.state.entries.map((entry, idx) => (
              <li key={idx}>
                <a href={entry.link}>{entry.title.split(" – ")[0]}</a>
              </li>
            ))
          }
        </ul>
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