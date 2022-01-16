import './nextPage.css'
export const NextPageClient = ({ nextPage, previousPage }) => {
    return (
        <div>
            <img src="./images/left-arrow.png" alt="" className='previous' onClick={nextPage}></img>
            <img src="./images/next.png" alt="" className='next' onClick={previousPage}></img>
        </div>
    )
}