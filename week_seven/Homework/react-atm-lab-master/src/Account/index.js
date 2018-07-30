import React, { Component } from 'react';


class Account extends Component {
  state={balance: 0}
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" />
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
