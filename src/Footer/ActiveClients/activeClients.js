import './activeClients.css'
export const CountActive = ({ ClientsToCount }) => {
    const ActiveArray = []
    ClientsToCount.filter((client) => {
        if (client.status === 'active') {
            ActiveArray.push(client)
            return ActiveArray.length
        }
    })
    return (
        <div className="clients" id="actived-clients">
            ACTIVE CUSTOMERS :<span className='ActiveArray'>{ActiveArray.length}</span> / <span>{ClientsToCount.length}</span>
        </div>
    )
}