import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class EditExpense extends Component {

  constructor(props) {
    super(props)

    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onChangeExpenseAmount = this.onChangeExpenseAmount.bind(this);
    this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      amount: '',
      description: ''
    }
  }

  componentDidMount() {
    // this._isMounted = true;
    axios.get('http://localhost:8000/api/expenses/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          amount: res.data.amount,
          description: res.data.description
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  onChangeExpenseName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeExpenseAmount(e) {
    this.setState({ amount: e.target.value })
  }

  onChangeExpenseDescription(e) {
    this.setState({ description: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const expenseObject = {
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description
    };

    axios.put('http://localhost:8000/api/expenses/' + this.props.match.params.id, expenseObject)
      .then((res) => {
        
        
        console.log('Expense successfully updated')
        // Redirect to Expense List 
    this.props.history.push('/Form')
      }).catch((error) => {
        console.log(error)
      })
  }


  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeExpenseName} />
        </Form.Group>

        <Form.Group controlId="Amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" value={this.state.amount} onChange={this.onChangeExpenseAmount} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeExpenseDescription} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Expense
        </Button>
      </Form>
    </div>);
  }
}

export default EditExpense;