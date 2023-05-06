import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    const cars = [
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

  render() {
    const { cars } = this.state;
    return (
      <main className="container">
        <table class="table table-primary">
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
              <tr key="index">
                <td>{index + 1}</td>
                <td>{item.carNumber}</td>
                <td>{item.guilt}</td>
                <td>{item.date}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
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
