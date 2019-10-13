import * as utils from "../memory.js";
import React from "react";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ptr: ""
    };

    this.handlePtrCreate = this.handlePtrCreate.bind(this);
    this.handlePtrCreateChange = this.handlePtrCreateChange.bind(this);
  }
  handlePtrCreate(event) {}
  handlePtrCreateChange(event) {}

  handl;
  createPoint() {
    var j = utils.publicMemoryObj.newObj(56);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlePtrCreate}>
          <label>Enter ptr value and click to create: </label>
          <input
            name="ptr"
            type="number"
            value={this.state.ptr}
            onChange={this.handlePtrCreateChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
