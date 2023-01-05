import { useState } from 'react';
import { IComment } from '../../comments.types';
import CommentForm from '../comment-form/comment-form';
import styles from './styles.module.scss';

export interface CommentItemProps {
  comment: IComment;
  commentEntities?: { [key: number]: IComment }; // local state
  onReply?: (a: { id: number; text: string }) => void;
}

// from 0
const MAX_DEPTH = 3;

const CommentItem = ({
  comment,
  commentEntities = {},
  onReply = () => {},
}: CommentItemProps): JSX.Element => {
  const [isShowForm, setIsShowForm] = useState(false);
  const { id, children, text, depth = 0 } = comment;

  const replyHandler = ({ text, id }: { text: string; id: number }) => {
    onReply({ text, id });
  };

  return (
    <div>
      <div className={styles.comment}>
        <div className={styles.commentTop}>
          <div>User Data</div>
          <div>date</div>
          <button
            className={styles.replyBtn}
            onClick={() => setIsShowForm(!isShowForm)}
          >
            {isShowForm ? 'close' : 'reply'}
          </button>
        </div>
        <div>
          <p>{text}</p>
        </div>
        {isShowForm && (
          <div style={{ marginTop: '24px' }}>
            <CommentForm
              onSubmit={({ value }) => replyHandler({ text: value, id })}
            />
          </div>
        )}
      </div>
      <div className={styles.replies}>
        {children.map((id) => (
          <CommentItem
            key={id}
            commentEntities={commentEntities}
            comment={commentEntities[id]}
            onReply={(args) =>
              replyHandler({
                text: args.text,
                id: depth >= MAX_DEPTH - 1 ? comment.id : args.id,
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CommentItem;
