import { INavItem } from '../Models/Navbar.ts';

export const navitems: INavItem[] = [
  { id: 1, imgUrl: './images/dashboard.svg', label: 'Dashboard', url: '/dashboard' },
  { id: 2, imgUrl: './images/analytics.svg', label: 'Revenue Analytics', url: '/revenue-analytics' },
  { id: 3, imgUrl: './images/journeys.svg', label: 'Journeys', url: '/journeys' },
  { id: 4, imgUrl: './images/performance.svg', label: 'Performance', url: '/performance' },
  { id: 5, imgUrl: './images/platform.svg', label: 'Data Platform', url: '/data-platform' },
  { id: 6, imgUrl: './images/settings.svg', label: 'Settings', url: '/settings' },
  { id: 7, imgUrl: './images/help.svg', label: 'Help', url: '/help' },
];
