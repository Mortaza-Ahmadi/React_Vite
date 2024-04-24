import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1Value: '',
      input2Value: ''
    };
    this.handleChangeInput1 = this.handleChangeInput1.bind(this);
    this.handleChangeInput2 = this.handleChangeInput2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput1(event) {
    this.setState({ input1Value: event.target.value });
  }

  handleChangeInput2(event) {
    this.setState({ input2Value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('FirstName:', this.state.input1Value);
    console.log('lastName:', this.state.input2Value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-xl">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Firstname:</label>
          <input
            type="text"
            value={this.state.input1Value}
            onChange={this.handleChangeInput1}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">lastname:</label>
          <input
            type="text"
            value={this.state.input2Value}
            onChange={this.handleChangeInput2}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default InputForm;
