import './balance.css'
export const ClientBalance = ({ balance, currency, className }) => {
    return (
        <td>
            <p className={className}>{balance}</p>
            <p className='styleCurrency'>{currency}</p>
        </td>
    )
}