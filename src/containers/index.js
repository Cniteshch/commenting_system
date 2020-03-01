import React, { Component } from "react";
import { connect } from "react-redux";
import { POST_COMMENT, GET_COMMENT } from "../sharedFunctions/types";
import { slide as Menu } from "react-burger-menu";
import { blog, getSelectedData } from "../sharedFunctions/helper";
import { BlogComponent } from "../components/shared/blog";
import Comment from "../components/shared/comment";
import Popover from "react-text-selection-popover";
import Button from "../components/shared/button";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selected: ""
    };
    this.refParagraph = React.createRef();
    this.refCode = React.createRef();
  }

  postComment = (comment, selected) => {
    this.props.postComment(comment, selected);
  };

  componentDidMount() {
    this.props.getComments();
  }

  isMenuOpen = state => {
    this.setState({
      open: state.isOpen,
      selected: getSelectedData(window.getSelection())
    });
    return state.isOpen;
  };

  render() {
    const { comments } = this.props;
    const { selected } = this.state;
    return (
      <div className="row">
        <Popover selectionRef={this.refParagraph}>
          <h3
            style={{
              background: "rgb(245,245,252)",
              color: "#000",
              width: "100%"
            }}
          >
            <Button
              onClickFunction={() => this.setState({ open: true })}
              label="Comment over this text"
            />
          </h3>
        </Popover>
        <div className="col-md-12">
          <Menu
            onStateChange={this.isMenuOpen}
            disableAutoFocus
            id={"sidebar"}
            className={"my-menu"}
            disableCloseOnEsc
            noOverlay
            width={"40%"}
            customBurgerIcon={false}
            elastic
            isOpen={this.state.open}
            left
          >
            <h2>Scroll to see your comments</h2>
            <Comment
              selected={selected}
              comments={comments}
              post={this.postComment}
            />
          </Menu>
          <div className="container">
            <div
              ref={this.refParagraph}
              contentEditable
              suppressContentEditableWarning
              onInput={this.onChangeText}
            >
              <BlogComponent blog={blog} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.CommentingReducer.loading,
    comments: state.CommentingReducer.comments,
    shouldUpdate: state.CommentingReducer.shouldUpdate
  };
}

const mapDispatchToProps = dispatch => {
  return {
    postComment: (comment, selected) => dispatch({ type: POST_COMMENT, comment, selected }),
    getComments: () => dispatch({ type: GET_COMMENT })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
