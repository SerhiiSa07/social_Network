import React from "react";
import { updateStatus } from "../../../redux/profile-reducer";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.value);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "------"}</span>
          </div>
        )}
        {!this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              value={this.state.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
