import React, { Component } from "react";

class CarModal extends Component {
  constructor(props) {
    super();
    this.state = {
      carNumber: "",
      guilt: "",
      date: "",
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  render() {
    const { closeCarModal, saveChanges } = this.props;
    const { carNumber, guilt, date } = this.state;

    return (
      <div className="card mb-2">
        <div className="card-header">
          <h4>Add a car</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <form>
              <div className="form-group">
                <label htmlFor="carNumber">Mashina raqami</label>
                <input
                  type="text"
                  className="form-control"
                  id="carNumber"
                  aria-describedby="emailHelp"
                  placeholder="Mashinda raqami"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="guilt">Aybi</label>
                <input
                  type="text"
                  className="form-control"
                  id="guilt"
                  placeholder="Aybi"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Sanasi</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning m-1" onClick={closeCarModal}>
            Cancel
          </button>
          <button
            className="btn btn-success m-1"
            onClick={() => saveChanges(carNumber, guilt, date)}
          >
            Save changes
          </button>
        </div>
      </div>
    );
  }
}

export default CarModal;
