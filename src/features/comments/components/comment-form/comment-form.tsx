import { ChangeEvent, useState } from 'react';
import Textarea from '@/components/ui/textarea/textarea';

export interface CommentFormProps {
  onInput?: (a: { value: string }) => void;
  onSubmit?: (a: { value: string }) => void;
}

const CommentForm = ({
  onSubmit = () => {},
}: CommentFormProps): JSX.Element => {
  const [isShowSuccessText, setIsShowSuccessText] = useState(false);
  const [input, setInput] = useState('');
  const submitHandler = () => {
    if (!input) return;
    onSubmit({ value: input });
    setInput('');
    setIsShowSuccessText(true);
    setTimeout(() => {
      setIsShowSuccessText(false);
    }, 800);
  };

  return (
    <div>
      <Textarea
        value={input}
        onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInput(e.target.value)
        }
        placeholder={'Add a comment...'}
      />
      <button disabled={isShowSuccessText} onClick={submitHandler}>
        {isShowSuccessText ? 'Sended!' : 'Send'}
      </button>
    </div>
  );
};

export default CommentForm;
