import React, { useRef, useState } from "react";
import "./App.scss";

export default function App() {
  const [balance, setBalance] = useState(0);
  const addAmount = useRef();
  const [transactions, setTransactions] = useState([]);

  const deposite = () => {
    if (!addAmount.current.value == "") {
      let obj = {
        id: transactions.length + 1,
        before: balance,
        type: "deposite",
        amount: addAmount.current.value,
        after: balance + +addAmount.current.value,
      };
      setBalance(balance + +addAmount.current.value);
      transactions.push(obj);
      addAmount.current.value = "";
    } else {
      alert("enter amount");
    }
  };
  const withdrow = () => {
    if (addAmount.current.value <= balance) {
      let obj = {
        id: transactions.length + 1,
        before: balance,
        type: "withdrow",
        amount: addAmount.current.value,
        after: balance + -addAmount.current.value,
      };
      setBalance(balance + -addAmount.current.value);
      transactions.push(obj);
      addAmount.current.value = "";
    } else {
      alert("money is not enouph");
    }
  };
  return (
    <div className="App">
      <div className="balance col-12 text-center bg-red">
        Balance :{balance}
      </div>
      <div className="addBalance col-12 p-1 d-flex justify-content-center align-items-center bg-info">
        <input
          type="text"
          ref={addAmount}
          className="col-10 p-1"
          placeholder="Enter Amount"
        />
        <button className="btn btn-primary col-1" onClick={deposite}>
          Deposite
        </button>
        <button
          className="btn btn-danger col-1"
          disabled={balance == 0 ? true : false}
          onClick={withdrow}
        >
          Withdrow
        </button>
      </div>
      <div className="render">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th>-</th>
              <th>Before Balance</th>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>After Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((el, index) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>${el.before}</td>
                  <td
                    className={`text-center  bg-${
                      el.type == "deposite" ? "success" : "danger"
                    }`}
                  >
                    {el.type}
                  </td>
                  <td>
                    {el.type == "deposite" ? "+" : "-"}
                    {el.amount}
                  </td>
                  <td>${el.after}</td>
                  {transactions.length - 1 == index ? (
                    <td>
                      <button
                        className="col-12 btn btn-danger"
                        onClick={() => {
                          let arr = [...transactions];
                          arr.splice(index, 1);
                          setTransactions(arr);
                          setBalance(transactions[index].before);
                        }}
                      >
                        Cancrl
                      </button>
                    </td>
                  ) : (
                    <td></td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
