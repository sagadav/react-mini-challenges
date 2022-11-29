import { useState } from 'react';
import { IComment } from './comments.types';
import CommentForm, {
  CommentFormProps,
} from './components/comment-form/CommentForm';
import CommentItem, {
  CommentItemProps,
} from './components/comment-item/CommentItem';

/*
  Simple comment section. For simplicity, a local state is used
*/
// TODO: make on redux
const CommentSection = () => {
  // uniq id for comments
  const [nextId, setNextId] = useState(5);
  const [commentEntities, setCommentEntities] = useState<{
    [key: number]: IComment;
  }>({
    1: {
      id: 1,
      text: 'hello',
      children: [],
    },
    2: {
      id: 2,
      text: 'test',
      children: [],
    },
  });
  const [commentIds, setCommentIds] = useState([1, 2]);

  const createComment: CommentFormProps['onSubmit'] = ({ value }) => {
    setCommentEntities({
      ...commentEntities,
      [nextId]: {
        id: nextId,
        text: value,
        children: [],
      },
    });
    setCommentIds((v) => [...v, nextId]);
    setNextId((v) => v + 1);
  };
  const createReply: CommentItemProps['onReply'] = ({ id, text }) => {
    const depth = commentEntities[id].depth ?? 0;
    setCommentEntities({
      ...commentEntities,
      [nextId]: {
        id: nextId,
        text,
        children: [],
        depth: depth + 1,
      },
      [id]: {
        ...commentEntities[id],
        children: [...commentEntities[id].children, nextId],
      },
    });
    setNextId((v) => v + 1);
  };

  return (
    <div>
      <div>
        {commentIds.map((id) => (
          <CommentItem
            key={id}
            comment={commentEntities[id]}
            commentEntities={commentEntities}
            onReply={createReply}
          />
        ))}
      </div>
      <div>
        <CommentForm onSubmit={createComment} />
      </div>
    </div>
  );
};

export default CommentSection;
