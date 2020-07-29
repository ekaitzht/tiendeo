import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Radio extends Component {
  constructor() {
    super();
    this.state = {
      radioClick: "asc"
    };
  }

  onChange = e => {
    // on radio state change handler
    this.setState(
      {
        radioClick: e.currentTarget.value
      },
      () => {
        this.props.sortBy(this.state.radioClick);
      }
    );
  };

  render() {
    return (
      <div className="radioButtons">
        <div className="left">
          <input
            type="radio"
            value="asc"
            checked={this.state.radioClick === "asc"}
            onChange={this.onChange}
          />
          <label>Sort Title Asc</label>
        </div>
        <div className="right">
          <input
            type="radio"
            value="desc"
            checked={this.state.radioClick === "desc"}
            onChange={this.onChange}
          />
          <label>Sort Title Desc</label>
        </div>
        <div className="left">
          <input
            type="radio"
            value="ascCreated"
            checked={this.state.radioClick === "ascCreated"}
            onChange={this.onChange}
          />
          <label>Sort Creation Asc</label>
        </div>
        <div className="right">
          <input
            type="radio"
            value="descCreated"
            checked={this.state.radioClick === "descCreated"}
            onChange={this.onChange}
          />
          <label>Sort Creation Desc</label>
        </div>
      </div>
    );
  }
}

Radio.propTypes = {
  sortBy: PropTypes.func
};

export default Radio;
