import ResourcesBox from './ResourcesBox.tsx';
import RevenueChart from './RevenueChart.tsx';

export default function ResourcesSummery() {
  return (
    <section className="resources-summery">
      <div className="box">
        <div className="resources-counts">
          <ResourcesBox />
          <ResourcesBox />
          <ResourcesBox />
          <ResourcesBox />
        </div>
        <div className="resources">
          <div className="resources_header">
            <h3>Deals & Revenue</h3>

            <div className="legend">
              <div className="legend_item">
                <div className="legend_item_circle"></div>
                <div className="legend_item_text">Deals</div>
              </div>

              <div className="legend_item">
                <div className="legend_item_circle legend_item_circle_revenue"></div>
                <div className="legend_item_text">Revenue</div>
              </div>
            </div>
          </div>
          <RevenueChart />
        </div>
      </div>
    </section>
  );
}
