import React, { Component } from "react";
import CarModal from "./CarModal";

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      cars: [],
      modalVisibility: false,
    };
  }

  componentDidMount() {
    const cars = [
      {
        carNumber: "01 D555 AA",
        guilt: "Havfsizlik kamari",
        date: "5/6/2023",
      },
      {
        carNumber: "01 D555 AA",
        guilt: "Havfsizlik kamari",
        date: "5/6/2023",
      },
      {
        carNumber: "01 D555 AA",
        guilt: "Havfsizlik kamari",
        date: "5/6/2023",
      },
    ];
    this.setState({
      cars,
    });
  }

  deleteCar = (index) => {
    const { cars } = this.state;
    cars.splice(index, 1);
    this.setState({
      cars,
    });
  };

  openCarModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };

  closeCarModal = () => {
    this.setState({
      modalVisibility: false,
    });
  };

  saveChanges = (carNumber, guilt, date) => {
    const { cars } = this.state;
    if (carNumber && guilt && date) {
      cars.push({ carNumber, guilt, date });
      this.setState({ cars, modalVisibility: false });
    } else {
      alert("Fill the blank");
    }
  };

  render() {
    const { cars, modalVisibility } = this.state;
    return (
      <main className="container">
        <button className="btn btn-primary mb-2" onClick={this.openCarModal}>
          Add a car
        </button>
        {modalVisibility ? (
          <CarModal
            closeCarModal={this.closeCarModal}
            saveChanges={this.saveChanges}
          />
        ) : (
          ""
        )}
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mashina raqami</th>
              <th scope="col">Aybi</th>
              <th scope="col">Sanasi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cars.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.carNumber}</td>
                <td>{item.guilt}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.deleteCar(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default Main;
