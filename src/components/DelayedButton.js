import React from "react";

class DelayedButton extends React.Component {

  clickHandler = (e) => {
    e.persist()
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.clickHandler}>Delay Button</button>
    )
  }
}
export default DelayedButton
