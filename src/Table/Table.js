import './Table.css';
import { ClientName } from '../Tbody/Name/Name.js'
import { ClientDescription } from '../Tbody/Description/description.js'
import { ClientRate } from '../Tbody/Rate/rate.js'
import { ClientBalance } from '../Tbody/Balance/balance.js'
import { ClientDeposit } from '../Tbody/Deposit/deposit.js'
import { ClientStatus } from '../Tbody/Status/status.js'
import { ButtonAdd } from '../Tbody/ButtonAdd/button.js';
import { useState } from 'react';

const clients = [{
  name: 'israe moutawkil',
  number: 5665489891,
  description: 'katrina ipsum dolor sit amet , consecteur...',
  rate: 700.,
  currency: 'INR',
  balance: 200.00,
  deposit: 500.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'lock',
},
{
  name: 'maha ezzayer',
  number: 5665489892,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 800.00,
  currency: 'INR',
  balance: -400.00,
  deposit: 600.00,
  status: 'inactive',
  chexboxing: 'unchecked',
  checking: 'lock',

},
{
  name: 'hiba idrissi',
  number: 5665489893,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 600.00,
  currency: 'INR',
  balance: 100.00,
  deposit: 300.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'notLock',
},
{
  name: 'sara dahbi',
  number: 5665489894,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 200.00,
  currency: 'INR',
  balance: -700.00,
  deposit: 100.00,
  status: 'inactive',
  chexboxing: 'unchecked',
  checking: 'lock',
},
{

  name: 'alae idrissi',
  number: 5665489895,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 200.00,
  currency: 'INR',
  balance: 300.00,
  deposit: 300.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'lock',
},
{
  name: 'ilham janati',
  number: 5665489896,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 900.00,
  currency: 'INR',
  balance: "00.00",
  deposit: 600.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'notLock',

},
{
  name: 'mehdi benjloun',
  number: 5665489897,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 400.00,
  currency: 'INR',
  balance: -900.00,
  deposit: 600.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'notLock',

},
{
  name: 'mohamad attar',
  number: 5665489821,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 200.00,
  currency: 'INR',
  balance: 100.00,
  deposit: 600.00,
  status: 'inactive',
  chexboxing: 'unchecked',
  checking: 'notLock',
},
{
  name: 'ikram issaoui',
  number: 56654898456,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 100.00,
  currency: 'INR',
  balance: -400.00,
  deposit: 700.00,
  status: 'inactive',
  chexboxing: 'unchecked',
  checking: 'notLock',

}, {
  name: 'alae ezayed',
  number: 5665489847,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 700.00,
  currency: 'INR',
  balance: 600.00,
  deposit: 800.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'notLock',
}, {
  name: 'samir janati',
  number: 5665486564,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 200.00,
  currency: 'INR',
  balance: -900.00,
  deposit: 8600.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'lock',
},
{
  name: 'ismail hedad',
  number: 566548123,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 700.00,
  currency: 'INR',
  balance: 600.00,
  deposit: 300.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'lock',
}, {
  name: 'ibrahim isaoui',
  number: 56632215,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 600.00,
  currency: 'INR',
  balance: 300.00,
  deposit: 400.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'lock',
}, {
  name: 'iarim souiri',
  number: 565213288,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 500.00,
  currency: 'INR',
  balance: -6200.00,
  deposit: 300.00,
  status: 'inactive',
  chexboxing: 'unchecked',
  checking: 'notLock',
}, {
  name: 'younes qabaj',
  number: 13516545664,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 900.00,
  currency: 'INR',
  balance: -200.00,
  deposit: 400.00,
  status: 'inactive',
  chexboxing: 'unchecked',
  checking: 'notLock',
}, {
  name: 'firdaous qabaj',
  number: 53214569877,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 200.00,
  currency: 'INR',
  balance: 400.00,
  deposit: 600.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'notLock',
}, {
  name: 'kadin herwitz',
  number: 599875347,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 700.00,
  currency: 'INR',
  balance: -600.00,
  deposit: 800.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'notLock',
}, {
  name: 'abdlkrim houmidi',
  number: 588888847,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 700.00,
  currency: 'INR',
  balance: 600.00,
  deposit: 800.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'notLock',
}, {
  name: 'mira dokiris',
  number: 563333337,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 800.00,
  currency: 'INR',
  balance: -100.00,
  deposit: 200.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'notLock',
}, {
  name: 'carter Rosser',
  number: 565566677,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 400.00,
  currency: 'INR',
  balance: -300.00,
  deposit: 900.00,
  status: 'active',
  chexboxing: 'unchecked',
  checking: 'notLock',
}, {
  name: 'sanae ramzi',
  number: 56523247,
  description: 'lorem ipsum dolor sit amet, consecteur...',
  rate: 700.00,
  currency: 'INR',
  balance: 600.00,
  deposit: 800.00,
  status: 'active',
  checking: 'notLock',
  chexboxing: 'unchecked',
},

];
export const TableBodyClients = () => {
  const [searchElement, setsearchElement] = useState("");
  const [data, setdata] = useState(clients)
  const [order, setorder] = useState("ASC")
  const sorting = (column) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setdata(sorted)
      setorder("DSC")
    } else if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      );
      setdata(sorted)
      setorder("ASC")
    }
  }
  return (
    <div>
      <header className="header">
        <img src="./images/Filter.image.png" alt="" className='imageFilter'></img>
        <div>
          <img src="./images/search.png" alt="" className='imageSearch'></img>
          <input type='search' placeholder='Search' className='searching' id='searchId' onChange={(e) => { setsearchElement(e.target.value); }} />
        </div>
        <ButtonAdd />
      </header>
      <table>
        <thead className="thead">
          <tr>
            <th><input className='checkbox' type='checkbox'></input></th>
            <th className='styleHeader'>Name<img onClick={() => sorting('name')} src="./images/sort-up.png" alt="" className='imagesortName'></img></th>
            <th className='styleHeader'>DESCRIPTION</th>
            <th className='styleHeader'>RATE</th>
            <th className='styleHeader'>BALANCE</th>
            <th className='styleHeader'>DEPOSIT</th>
            <th className='styleHeader'>STATUS<img onClick={() => sorting('status')} src="./images/sort-up.png" alt="" className='imagesortStatus'></img></th>
            <th className='styleHeader'><img src="./images/point.png" alt="" className='imageMore'></img></th>
            <th className='styleHeader'><i id="sept" class="fa fa-ellipsis-h" aria-hidden="true"></i></th>
          </tr>
        </thead>
        <tbody>
          {clients.filter((val) => {
            if (searchElement === "") {
              return val;
            } else if (val.name.toLowerCase().includes(searchElement.toLowerCase()) || val.description.toLowerCase().includes(searchElement.toLowerCase())) {
              return val
            }
          }).map((client) => {
            return (
              <tr>
                <td><input className='checkbox' type='checkbox'></input></td>
                <ClientName name={client.name} number={client.number} />
                <ClientDescription description={client.description} />
                <ClientRate rate={client.rate} currency={client.currency} />
                <ClientBalance className={client.balance > 0 ? "green-balance" : "red-balance"} balance={client.balance} currency={client.currency} />
                <ClientDeposit deposit={client.deposit} currency={client.currency} />
                <ClientStatus className={client.status === "active" ? "active" : "inactive"} status={client.status} currency={client.currency} />
                <td><img src="./images/edit.png" alt="" className='imageEdit'></img></td>
                <td><img src="./images/delete.poubelle.png" alt="" className='imageDelete'></img></td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}