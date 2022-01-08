import './rate.css'
export const ClientRate = ({ rate, currency }) => {
    return (
        <td>
            <p className="styleRate">{rate}</p>
            <p className='styleCurrency'>{currency}</p>
        </td>
    )
}