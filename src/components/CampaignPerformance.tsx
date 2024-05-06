import TableCaption from './TableCaption.tsx';
import TableHeader from './TableHeader.tsx';
import TableItem from './TableItem.tsx';
import { useGetCommentsQuery } from '../services/comments.ts';

export default function CampaignPerformance() {
  const { data: comments } = useGetCommentsQuery();

  return (
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
  );
}
