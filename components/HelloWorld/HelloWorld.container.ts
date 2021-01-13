import { connect } from "react-redux";
import HelloWorld from "./HelloWorld";
import { setMessageBegin } from "../../store/actions/helloWorld.actions";
import { getMessage } from "../../store/selectors/helloWorld.selectors";

mapStateToProps = state => {
  // get data from state here
  const message = getMessage(state);
  return message;
};

mapDispatchToProps = {
  setMessageBegin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
