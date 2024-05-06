import NavLink from './NavLink.tsx';
import { NavItemInterface } from '../Models/Navbar.ts';

type NavItemType = Omit<NavItemInterface, 'id'>;
export default function NavItem({ imgUrl, label, url }: NavItemType) {
  return (
    <li>
      <NavLink label={label} imgUrl={imgUrl} url={url} />
    </li>
  );
}
