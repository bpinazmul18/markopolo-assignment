import NavLink from './NavLink.tsx';
import { INavItem } from '../Models/Navbar.ts';

type NavItemType = Omit<INavItem, 'id'>;
export default function NavItem({ imgUrl, label, url }: NavItemType) {
  return (
    <li>
      <NavLink label={label} imgUrl={imgUrl} url={url} />
    </li>
  );
}
