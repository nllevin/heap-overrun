import React from "react";
import { fetchMatchingTags } from "../../util/tag_api_util";

class TagEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isFrozen: false,
      inputVal: "",
      matchingTags: [],
      selectedTags: [],
      activeTagIdx: 0
    };
    this.editTag = this.editTag.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.selectTag = this.selectTag.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleFreeze = this.toggleFreeze.bind(this);
  }

  editTag(tagIdx) {
    if (this.isDeleting) { this.isDeleting = false; return; }
    this.isEditing = true;
    const newTags = [...this.state.selectedTags];
    const editedTag = this.state.selectedTags[tagIdx];
    newTags.splice(tagIdx, 1);

    fetchMatchingTags(editedTag, newTags)
      .then(matchingTags => {
        this.isEditing = false;
        this.setState({
          matchingTags,
          activeTagIdx: tagIdx, 
          selectedTags: newTags,
          inputVal: editedTag,
          isActive: true
        });
        this.props.updateTags(newTags);
      });
  }

  handleInput(e) {
    const newInputVal = e.target.value;
    if (newInputVal.length > 0) {
      fetchMatchingTags(newInputVal, this.state.selectedTags)
        .then(matchingTags => this.setState({
          matchingTags,
          inputVal: newInputVal
        }));
    } else {
      this.setState({
        matchingTags: [],
        inputVal: ""
      });
    }
  }

  removeTag(tagIdx) {
    this.isDeleting = true;
    const newTags = [...this.state.selectedTags];
    newTags.splice(tagIdx, 1);
    this.setState({
      selectedTags: newTags
    });
    this.props.updateTags(newTags);
  }

  selectTag(tag) {
    if (tag.length === 0 || this.isEditing ) { return; }
    const { activeTagIdx, selectedTags } = this.state;
    const { updateTags } = this.props;
    const newTags = selectedTags.slice(0, activeTagIdx) 
      .concat([tag])
      .concat(selectedTags.slice(activeTagIdx))
    updateTags(newTags);
    this.setState({ 
      selectedTags: newTags,
      activeTagIdx: newTags.length,
      inputVal: "",
      isFrozen: false,
      isActive: false
    });
  }

  toggleFocus() {
    if (this.state.isActive && this.state.isFrozen) { return; }
    this.setState({ isActive: !this.state.isActive });
  }

  toggleFreeze() {
    this.setState({ isFrozen: !this.state.isFrozen });
  }

  render() {
    const { isActive, activeTagIdx, selectedTags, inputVal, matchingTags } = this.state;
    return (
      <div className="tag-editor-container">
        <div 
          className={isActive ? "tag-editor active" : "tag-editor"}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          onClick={() => this.selectTag(inputVal)}
        >
          <span className="tag-list">
            {
              selectedTags.slice(0, activeTagIdx).map((tag, idx) => (
                <span key={idx} onClick={() => this.editTag(idx)}>
                  {tag}
                  <div className="times-icon-container" onClick={() => this.removeTag(idx)}>
                    <i className="times-icon">x</i>
                  </div>
                </span>
              ))
            }
          </span>
          <input 
            type="text"
            className="tag-input"
            value={inputVal}
            placeholder={selectedTags.length === 0 ? "e.g. (c vb.net java)": ""}
            onChange={this.handleInput}
            style={{width:`${6 * inputVal.length + 126}px`}}
          />
          <span className="tag-list">
            {
              selectedTags.slice(activeTagIdx).map((tag, idx) => (
                <span key={idx} onClick={() => this.editTag(activeTagIdx + idx)}>
                  {tag}
                  <div className="times-icon-container" onClick={() => this.removeTag(activeTagIdx + idx)}>
                    <i className="times-icon">x</i>
                  </div>
                </span>
              ))
            }
          </span>
        </div>
        {
          (!isActive || inputVal.length === 0) ? "" : (
            <ul className="matching-tags"
              onPointerEnter={this.toggleFreeze}
              onPointerLeave={this.toggleFreeze}
            >
                {
                  (matchingTags.length === 0 && inputVal.length > 0) ? 
                    (
                      <p 
                        className="no-matching-tags"
                        onClick={() => { this.selectTag(inputVal) }}
                      >
                        No results found. Add new tag?
                      </p> 
                    ) : matchingTags.map(tag => (
                      <li 
                        key={tag.id}
                        onClick={() => {this.selectTag(tag.title)}}
                        className="tag"
                      >
                        <span>{tag.title}</span>
                        <p className="tag-num-taggings">x {tag.numTaggings}</p>
                        <p className="tag-description">{tag.description}</p>
                      </li>
                    ))
                }
            </ul>
          )
        }
      </div>
    );
  }
};

export default TagEditor;