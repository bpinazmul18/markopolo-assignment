import { IGetCommentsResponse } from '../Models/Comments.ts';

type TableItemProps = IGetCommentsResponse;
export default function TableItem({ email, id, name, body }: TableItemProps) {
  return (
    <tr>
      <td>{id}</td>
      <td>{email}</td>
      <td>{name.split(' ')[0]}</td>
      <td>
        <div className="comment-body">{body}</div>
      </td>
    </tr>
  );
}
