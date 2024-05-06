import { navitems } from '../static/navitems.ts';
import NavItem from './NavItem.tsx';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-main">
        <a className="brand" href="#">
          <img className="logo" src="./images/game-icons--crystal-shine.svg" alt="Logo" />
          <div className="brand-text">unifydata</div>
        </a>

        <div className="sidebar-nav">
          <ul>
            {navitems.map((item) => (
              <NavItem key={item.id} label={item.label} imgUrl={item.imgUrl} url={item.url} />
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="user">
          <div className="user_info">
            <img className="user_avatar" src="./images/avatar.jpg" alt="Ariene Lane" />
            <div>
              <h4 className="user_name">Ariene Lane</h4>
              <small className="user_link">globalx.com</small>
            </div>
          </div>

          <img className="user_options" src="./images/mage--dots.svg" alt="merge dots" />
        </div>
      </div>
    </nav>
  );
}
