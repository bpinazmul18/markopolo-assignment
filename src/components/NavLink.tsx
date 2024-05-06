import { NavItemInterface } from '../Models/Navbar.ts';

type NavLinkType = Omit<NavItemInterface, 'id'>;
export default function NavLink({ imgUrl, label, url }: NavLinkType) {
  return (
    <a href={url}>
      <img src={imgUrl} alt={label} />
      <span>{label}</span>
    </a>
  );
}
