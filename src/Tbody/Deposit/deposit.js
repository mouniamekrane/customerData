import './deposit.css'
export const ClientDeposit = ({ deposit, currency }) => {
    return (
        <td>
            <p className="styleDeposit">{deposit}</p>
            <p className='styleCurrency'>{currency}</p>
        </td>
    )
}