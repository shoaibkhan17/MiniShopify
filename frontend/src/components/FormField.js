import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input
            value={this.props.value}
            onChange={this.props.onChange}
            className="input"
            type={this.props.type === undefined ? "input" : this.props.type}
            required={this.props.required ? false : true}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}

export default FormField;
