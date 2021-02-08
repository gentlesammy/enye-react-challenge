import React from 'react'

const pagination = ({profilesPerPage, totalProfiles}) => {
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalProfiles /  profilesPerPage); index++) {
        pageNumbers.push(index)
    }
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                {
                    pageNumbers.map((page) => (
                        <li class="page-item" key={page}><a class="page-link" href="!#">{page}</a></li>
                    ))
                }
            </ul>
        </nav>
        
    )
}

export default pagination


/*

 <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>

*/