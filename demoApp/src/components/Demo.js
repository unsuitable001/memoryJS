import * as memoryJS from "../ReactMemory.js";
import React from "react";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ptrInput: "",
      ptr: "",
      ptrCreated: false,
      customMemInput: "",
      customMem: ""
    };

    this.handlePtrCreate = this.handlePtrCreate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deletePtr = this.deletePtr.bind(this);
    this.changeCustomMem = this.changeCustomMem.bind(this);
  }

  handlePtrCreate(event) {
    console.log("reached");
    // var pointer = memoryJS.Pointer.publicMemoryObj.newObj(255);

    //Instead set ptr state var to be equal to a pointer to an object of value passed in.

    var pointer = this.state.ptrInput;
    this.setState({ ptr: pointer, ptrCreated: true });
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  deletePtr(event) {
    this.setState({ ptr: "", ptrCreated: true });
    event.preventDefault();
  }

  changeCustomMem(event) {
    // create a new pointer at specific mem location

    this.setState({ customMem: this.state.customMemInput });
    alert("New pointer was created pointing to " + this.state.customMem);
    event.preventDefault();
  }

  render() {
    if (!this.state.ptrCreated) {
      return (
        <div>
          <form onSubmit={this.handlePtrCreate}>
            <label>Enter ptr value and click to create: </label>
            <input
              name="ptrInput"
              type="number"
              value={this.state.ptrInput}
              onChange={this.handleInputChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    } else {
      return (
        <ul>
          {/* <li><b>Memory Address of created pointer:</b> {this.state.ptr.value()}</li> */}
          <li>
            <b>Memory Address of created pointer:</b> 0x10000{" "}
            <i>(obtained by ptr.value())</i>
          </li>

          {/* <li><b>Value stored in pointer is:</b> {this.state.ptr.pointedTo()}</li> */}
          <li>
            <b>Value stored in pointer is:</b> {this.state.ptr}{" "}
            <i>
              Obtained by ptr.pointedTo() or ptr.point or
              memoryJS.publicMemoryObj.valueOf(ptr.value()))
            </i>
          </li>

          <li>
            <form onSubmit={this.handlePtrCreate}>
              {/* Change to method that edits state pointer using the proper code */}
              <label>
                <b>Enter a new value to point to: </b>
                <i>
                  Achieved using ptr.changeValue(i) or ptr.point = i or
                  memoryJS.publicMemoryObj.changeValue(ptr.vvalue(), i)
                </i>
              </label>
              <input
                name="ptrInput"
                type="number"
                value={this.state.ptrInput}
                onChange={this.handleInputChange}
              />
              <input type="submit" value="change value" />
            </form>
          </li>

          <li>
            <form>
              {" "}
              onSubmit={this.deletePtr}
              {/* update this method to use proper ptr.free */}
              <label>
                <b>Click to delete pointer</b>{" "}
                <i>
                  Achieved using ptr.free() or memoryJS.publicMemoryObj.free()
                </i>
              </label>
              <input type="submit" value="ptr.free()" />
            </form>
          </li>

          <li>
            <form onSubmit={this.changeCustomMem}>
              {/* Change to method that creates pointer using the proper code */}
              <label>
                <b>
                  Enter a new memory address to point to (in a new pointer):
                </b>
                <i>Achieved using var ptr = new Pointer('0x000')</i>
              </label>
              <input
                name="customMem"
                type="number"
                value={this.state.customMem}
                onChange={this.handleInputChange}
              />
              <input type="submit" value="create new pointer" />
            </form>
          </li>
        </ul>
      );
    }
  }
}
