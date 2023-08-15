const ATMDeposit = ( {onChange}) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit" value = "submit"></input>
    </label>
  );
};

const Account = () => {
  let transactionState = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0); // Account total at Bank
  let status = `Account Balance $ ${totalState}`;
  console.log("Account rendered");
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    transactionState = Number(event.target.value);
  };
  const [accountState, setAccountState] = React.useState(0);
  const handleSubmit = event => {
    setTotalState(totalState + transactionState);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">Account Balance {status}</h2>
      <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account/>, document.getElementById("root"));
