import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { Comment } from '../../comments.types';
import CommentForm from '../comment-form/comment-form';
import styles from './styles.module.scss';
import { formatDate } from '@/utils/format-date';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { createReply } from '../../comments.slice';

interface CommentItemProps {
  comment: Comment;
  parrentComment?: Comment;
}

// from 0
const MAX_DEPTH = 3;

const CommentItem = ({
  comment,
  parrentComment,
}: CommentItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id, text, date, depth = 0 } = comment;
  const { entities: commentEntities } = useAppSelector(
    (state) => state.comments
  );
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowReplies, setIsShowReplies] = useState(true);
  const isMaxDepthComment = depth >= MAX_DEPTH;
  const formattedDate = useMemo(() => {
    return formatDate(new Date(date));
  }, [date]);

  const replyHandler = ({ text, id }: { text: string; id: number }) => {
    dispatch(
      createReply({
        id: isMaxDepthComment && parrentComment ? parrentComment.id : id,
        text,
      })
    );
  };
  return (
    <div>
      <div className={styles.comment}>
        <div className={styles.commentTop}>
          <div className={styles.commentTop__commentData}>
            <div>username</div>
            <div className={styles.commentTop__date}>{formattedDate}</div>
          </div>
          <button
            className={styles.replyBtn}
            onClick={() => setIsShowForm(!isShowForm)}
          >
            {isShowForm ? 'close form' : 'reply'}
          </button>
          {comment.children.length !== 0 && !isMaxDepthComment && (
            <button onClick={() => setIsShowReplies(!isShowReplies)}>
              {isShowReplies
                ? 'hide replies'
                : `show ${comment.children.length} replies`}
            </button>
          )}
        </div>
        <div className={styles.commentContent}>
          <p>{text}</p>
        </div>
      </div>
      {isShowForm && (
        <div className={styles.comment}>
          <div>
            <CommentForm
              onSubmit={({ value }) => replyHandler({ text: value, id })}
              onClose={() => setIsShowForm(false)}
              showCloseButton
            />
          </div>
        </div>
      )}
      {isShowReplies && (
        <div className={clsx(styles.replies)}>
          {comment.children.map((id) => (
            <CommentItem
              key={id}
              comment={commentEntities[id]}
              parrentComment={comment}
            />
          ))}
          <div
            className={styles.replies__collapsingArea}
            onClick={() => setIsShowReplies(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
