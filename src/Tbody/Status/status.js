import './status.css'
export const ClientStatus = ({ status, className }) => {
    return (
        <td>
            <div className={className}>
                {status}
            </div>
        </td>
    )
}