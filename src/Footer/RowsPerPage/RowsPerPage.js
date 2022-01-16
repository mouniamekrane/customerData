import './RowsPerPage.css'
export const RowsPerPageClients = () => {
    return (
        <div class="group-select">
            <div className="page"> Rows per page : </div>
            <select id="rows-per-page" className="style">
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="20">25</option>
            </select>
        </div>
    )
}