import React, { Component } from "react";

class CarModal extends Component {
  render() {
    const { closeCarModal } = this.props;

    return (
      <div className="card mb-2">
        <div className="card-header">
          <h4>Add a car</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <form>
              <div class="form-group">
                <label for="carNumber">Mashina raqami</label>
                <input
                  type="text"
                  class="form-control"
                  id="carNumber"
                  aria-describedby="emailHelp"
                  placeholder="Mashinda raqami"
                  required
                />
              </div>
              <div class="form-group">
                <label for="guilt">Aybi</label>
                <input
                  type="text"
                  class="form-control"
                  id="guilt"
                  placeholder="Aybi"
                />
              </div>
              <div className="form-group">
                <label for="date">Sanasi</label>
                <input type="date" className="form-control" id="date" />
              </div>
            </form>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning m-1" onClick={closeCarModal}>
            Cancel
          </button>
          <button className="btn btn-success m-1">Save changes</button>
        </div>
      </div>
    );
  }
}

export default CarModal;
