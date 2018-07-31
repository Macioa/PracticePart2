import React, { Component } from 'react';


class Account extends Component {
  state={balance: 0}

  handleClick=p=>e=>{
    this.updateAccount(Math.floor(p*e.target.form.amount.value*100.0)/100);
  }

  updateAccount(value) {
    let balance = this.state.balance;
    this.setState({
    balance: (balance + value > 0) ?
      (parseFloat(Math.round((balance + value) * 100)) / 100) : 0
    });
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance.toFixed(2)}</div>
        <form>
          <input type="number" min="0" step="0.01" placeholder="enter an amount" name="amount"/>
          <input type="button" value="Deposit" onClick={this.handleClick(1)}/>
          <input type="button" value="Withdraw" onClick={this.handleClick(-1)}/>
        </form>
      </div>
    )
  }
}

export default Account;
