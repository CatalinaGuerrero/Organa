import React, { Component } from 'react';

class StudentCount extends Component {
  state = {
    count: null,
  };

  componentDidMount() {
    const calculateStudentCount = (users) => users.filter(user => user.role === 'student')
      .map(student => student).length;

    fetch('https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users')
    .then(data => data.json())
    .then(users => {
      this.setState({ count: calculateStudentCount(users) });
    });
  }
  render() {
    if (this.state.count) {
      return (
        <span>Student Count: {this.state.count}</span>
      );
    }
    return (
      <span>Loading..</span>
    );
  }
}

export default StudentCount;
