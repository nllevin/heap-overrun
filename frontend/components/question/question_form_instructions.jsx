import React from "react";
import InstructionItem from "./instruction_item";

class QuestionFormInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeInstruction: 0 };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(idx) {
    if (this.state.activeInstruction === idx) {
      this.setState({ activeInstruction: null });
    } else {
      this.setState({ activeInstruction: idx })
    }
  }

  render() {
    const instructionItems = [
      { 
        title: "Summarize the problem",
        content: (
          <ul>
            <li>Include details about your goal</li>
            <li>Describe expected and actual results</li>
            <li>Include any error messages</li>
          </ul>
        )
      },
      {
        title: "Describe what you've tried",
        content: (
          <p>
            Show what you’ve tried and tell us what you found (on this site or 
            elsewhere) and why it didn’t meet your needs. You can get better 
            answers when you provide research.
          </p>
        )
      },
      {
        title: "Show some code",
        content: (
          <p>
            When appropriate, share the minimum amount of code others need to 
            reproduce your problem (also called a minimum, reproducible example).
          </p>
        )
      }
    ].map(({title, content}, idx) => (
      <InstructionItem 
        key={idx} 
        idx={idx}
        title={title} 
        content={content} 
        active={this.state.activeInstruction === idx}
        toggleActive={this.toggleActive}
      />
    ));

    return (
      <aside className="question-form-instructions">
        <h2>How to draft your question</h2>
        <p>The community is here to help you with specific coding, algorithm, or language problems.</p>
        <p>Avoid asking opinion-based questions.</p>
        <ol>
          {instructionItems}
        </ol>
      </aside>
    );
  }
}

export default QuestionFormInstructions;