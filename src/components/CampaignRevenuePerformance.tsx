import { useGetCommentsQuery } from '../services/comments.ts';
import TableItem from './TableItem.tsx';
import TableHeader from './TableHeader.tsx';
import TableCaption from './TableCaption.tsx';

export default function CampaignRevenuePerformance() {
  const { data: comments } = useGetCommentsQuery();
  return (
    <section className="campaign-revenue-performance">
      <div className="campaign-performance">
        <div className="table">
          <TableCaption />

          <table>
            <thead>
              <TableHeader />
            </thead>

            <tbody>
              {comments?.map((comment) => (
                <TableItem
                  key={comment.id}
                  id={comment.id}
                  name={comment.name}
                  body={comment.body}
                  email={comment.email}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="revenue-channels"></div>
    </section>
  );
}
