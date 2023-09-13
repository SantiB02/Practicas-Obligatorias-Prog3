import React from "react";

const Table = ({ netIncomes }) => {
  const incomeSum = netIncomes.reduce((acum, { income }) => acum + income, 0);
  const incomesAverage = (incomeSum / 3).toFixed(2); //limito el número a dos decimales

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map(({ brand, income }) => (
            <tr key={brand}>
              <td>{brand}</td>
              <td>{income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>{incomesAverage}</p>
    </div>
  );
};

export default Table;
