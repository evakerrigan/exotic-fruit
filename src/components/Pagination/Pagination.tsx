import './Pagination.css';

export const Pagination = () => {
  return (
    <div className="pagination">
      <ul className="pagination-list">
        <li className="pagination-item">
          <a href="" className="pagination-link">&lt;&lt;</a>
        </li>
        <li className="pagination-item">
          <a href="" className="pagination-link">1</a>
        </li>
        <li className="pagination-item">
          {/* <a href="" className="pagination-link">...</a> */}
          <input className="pagination-input" placeholder="..."></input>
        </li>
        <li className="pagination-item">
          <a href="" className="pagination-link">5</a>
        </li>
        <li className="pagination-item">
          <a href="" className="pagination-link">&gt;&gt;</a>
        </li>
      </ul>
    </div>
  )
}