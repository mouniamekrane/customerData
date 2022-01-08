import './footer.css'
import { CountActive } from './ActiveClients/activeClients.js'
import { RowsPerPageClients } from './RowsPerPage/RowsPerPage.js'
import { ClientsOfPage } from './PageOf/ClientsOf.js'
import { NextPageClient } from './Pagination/nextPage.js'
export const TableFooter = () => {
    return (
        <div className='footer'>
            <CountActive />
            <RowsPerPageClients />
            <ClientsOfPage />
            <NextPageClient />
        </div>
    )
}