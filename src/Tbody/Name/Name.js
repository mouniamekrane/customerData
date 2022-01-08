import './Name.css'
export const ClientName = ({ name, number }) => {
    return (
        <td>
            <p className="styleName">{name}</p>
            <p className='styleNumber'>{number}</p>
        </td>
    )
}