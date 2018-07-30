import React, { Component } from 'react';


class Account extends Component {
  state={balance: 0}

  handleClick=(e)=>{console.log(e.target.form.amount.value)
    let value=e.target.form.amount.value*1.0, balance = this.state.balance;
    (e.target.value==="Deposit") ? value=value:value=-value
    console.log(value)
    this.setState({balance: (balance+value>0)? balance+value:0})
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <form>
          <input type="text" placeholder="enter an amount" name="amount"/>
          <input type="button" value="Deposit" onClick={this.handleClick}/>
          <input type="button" value="Withdraw" onClick={this.handleClick}/>
        </form>
      </div>
    )
  }
}

export default Account;
