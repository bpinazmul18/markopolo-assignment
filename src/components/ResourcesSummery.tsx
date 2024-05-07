import ResourcesBox from './ResourcesBox.tsx';
import RevenueChart from './RevenueChart.tsx';
import { useGetPostsQuery } from '../services/posts.ts';
import { useGetCommentsQuery } from '../services/comments.ts';
import { useGetAlbumsQuery } from '../services/albums.ts';
import { useGetUsersQuery } from '../services/user.ts';

export default function ResourcesSummery() {
  const { data: posts } = useGetPostsQuery();
  const { data: comments } = useGetCommentsQuery({ _start: 0, limit: 0 });
  const { data: albums } = useGetAlbumsQuery();
  const { data: users } = useGetUsersQuery();

  return (
    <section className="resources-summery">
      <div className="box">
        <div className="resources-counts">
          <ResourcesBox name="Posts" count={posts?.length ?? 0} />
          <ResourcesBox name="Comments" count={comments?.length ?? 0} />
          <ResourcesBox name="Albums" count={albums?.length ?? 0} />
          <ResourcesBox name="Users" count={users?.length ?? 0} />
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
