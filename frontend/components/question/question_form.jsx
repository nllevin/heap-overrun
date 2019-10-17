import React from "react";
import QuestionFormInstructions from "./question_form_instructions";
import TagEditor from "./tag_editor";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTags = this.updateTags.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    .then(question => this.props.history.push(`/questions/${question.id}`));
  }
  
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateTags(tags) {
    this.setState({ tags });
  }

  render() {
    const { errors } = this.props;
    const errorsList = (
      <ul className="errors">
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );

    return (
      <div className="question-form">
        <div>
          <header>
            <h1>Ask a public question</h1>
          </header>
          <main>
            <div className="question-form-container">
              <form onSubmit={this.handleSubmit}>
                {errorsList}
                <label>
                  <div>
                    <h3>Title</h3>
                    <span>Be specific and imagine you're asking a question to another developer</span>
                  </div>
                  <input 
                    type="text"
                    placeholder="What's your programming question? Be specific."
                    value={this.state.title}
                    onChange={this.update("title")}
                  />
                </label>
                <label>
                  <div>
                    <h3>Body</h3>
                    <span>Include all the information someone would need to answer your question</span>
                  </div>
                  <textarea
                    value={this.state.body}
                    onChange={this.update("body")}
                  ></textarea>
                </label>
                <label>
                  <div>
                    <h3>Tags</h3>
                    <span>Add up to 5 tags to describe what your question is about</span>
                  </div>
                  <TagEditor updateTags={this.updateTags}/>
                </label>
              </form>
              <button className="button" onClick={this.handleSubmit}>Post your question</button>
            </div>
            <QuestionFormInstructions />
          </main>
        </div>
      </div>
    );
  }
}

export default QuestionForm;