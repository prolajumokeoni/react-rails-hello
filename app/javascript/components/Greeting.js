import React from "react"
import PropTypes from "prop-types"
class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greet: {this.props.greet}
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  greet: PropTypes.string
};
export default Greeting
