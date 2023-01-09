import CommentForm from './components/comment-form/comment-form';
import CommentItem from './components/comment-item/comment-item';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { createComment } from './comments.slice';

const CommentSection = () => {
  const dispatch = useAppDispatch();
  const { ids, entities } = useAppSelector((state) => state.comments);

  const createCommentHandler = ({ value }: { value: string }) => {
    dispatch(createComment({ text: value }));
  };
  return (
    <div>
      <div>
        {ids.map((id) => (
          <CommentItem key={id} comment={entities[id]} />
        ))}
      </div>
      <div>
        <CommentForm onSubmit={createCommentHandler} />
      </div>
    </div>
  );
};

export default CommentSection;
