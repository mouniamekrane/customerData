
import './activeClients.css'
export const CountActive = ({ clientsToCount }) => {
    return clientsToCount.filter((client) => {
        return client.status === "active";
    }).length;
    ;
}
