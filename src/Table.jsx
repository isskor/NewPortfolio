import React from 'react';

const Table = () => {
  let d = [];

  const data = () => {
    const types = ['checking', 'savings'];
    let type = types[Math.round(Math.random(2))];
    // console.log(randomNumber);

    // console.log(type);
    // random account number
    const accounts = [
      { number: 12674510000, name: 'wolfe' },
      { number: 57193710000, name: 'maengune' },
      { number: 71257810000, name: 'kaiser' },
    ];
    let ranAcc = Math.round(Math.random() * 30);
    let account;
    if (ranAcc <= 10) account = accounts[0];
    if (ranAcc <= 20 && ranAcc > 10) account = accounts[1];
    if (ranAcc > 20) account = accounts[2];

    const statuses = ['active', 'deactivated'];
    let status = statuses[Math.round(Math.random(2))];

    let currency = 'usd';

    let balance = (Math.random() * (10000 - 0 + 1)).toFixed(2);
    // console.log(new Intl.NumberFormat().format(balance));

    return { type, account, status, currency, balance };
  };
  for (let i = 0; i < 20; i++) {
    d.push(data());
  }

  console.log(d);
  return (
    <div style={{ height: '100vh', background: 'white' }} className='table'>
      <table>
        <thead>
          <tr>
            <th scope='col'>
              type <span></span>
            </th>
            <th className='account'>
              account <span></span>
            </th>
            <th className='status'>
              status <span></span>
            </th>
            <th>
              currency <span></span>
            </th>
            <th>
              balance <span></span>
            </th>
          </tr>
        </thead>
        <tbody>
          {d.map((a) => (
            <tr>
              <td>{a.type}</td>
              <td className='account'>
                {`${a.account?.number}`.replace(/\d{4}$/, '****')} -{' '}
                {a.account?.name.toUpperCase()}
              </td>
              <td className='status'>{a.status}</td>
              <td>USD</td>
              <td>{a.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
