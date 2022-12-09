import './Footer.css'
import { Pagination } from '../Pagination/Pagination'

export const Footer = () => {

  return (
    <div className="footer">
      <Pagination />
      <div className="wrapper-footer">
        <div className="footer-author">
          <a href="https://evakerrigan.github.io/rsschool-cv/" target="_blank" className="footer-author-link">Powered by Eva Kerrigan</a>
        </div>
        <div className="footer-social">
          <li className="footer-list">
            <a href="https://ru-ru.facebook.com" target="_blank" className="footer-link facebook"></a>
          </li>
          <li className="footer-list">
            <a href="https://twitter.com" target="_blank" className="footer-link twitter"></a>
          </li>
          <li className="footer-list">
            <a href="https://www.instagram.com" target="_blank" className="footer-link vk"></a>
          </li>
        </div>
      </div>

    </div>
  )
}