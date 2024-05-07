import TableCaption from './TableCaption.tsx';
import TableHeader from './TableHeader.tsx';
import TableItem from './TableItem.tsx';
import { useGetCommentsQuery } from '../services/comments.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore.ts';

export default function CampaignPerformance() {
  const search = useSelector((state: RootState) => state.dashboard.searching);
  console.log({ search });
  const { data: comments } = useGetCommentsQuery({ _start: 1, limit: 4 });

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
