import Header from './Header.tsx';
import ResourcesSummery from './ResourcesSummery.tsx';
import CampaignRevenuePerformance from './CampaignRevenuePerformance.tsx';

export default function MainContent() {
  return (
    <div className="mainContent">
      <Header />
      <ResourcesSummery />
      <CampaignRevenuePerformance />
    </div>
  );
}
