import './NavPage.css';

export const NavPage = () => {
  return (
    <div className="navpage">
      <ul className="navpage-list">
        <li className="navpage-item"><a className="navpage-link" href="">магазин</a></li>
        <li className="navpage-item"><a className="navpage-link" href="">доставка</a></li>
        <li className="navpage-item"><a className="navpage-link" href="">о нас</a></li>
        <li className="navpage-item"><a className="navpage-link" href="">контакты</a></li>
      </ul>
    </div>
  )
}