import './ClientsOf.css'
export const ClientsOfPage = ({ startPage, totalOf }) => {
    return (
        <div>
            <div class="of" id="select-rows"> {startPage}Of {totalOf}</div>
        </div>
    )
}