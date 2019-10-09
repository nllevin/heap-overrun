import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "signup"
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  demoLogin: () => dispatch(login({ email: "demo@user.com", password: "password" }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);