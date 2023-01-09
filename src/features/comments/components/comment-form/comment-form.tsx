import { ChangeEvent, useState } from 'react';
import Textarea from '@/components/ui/textarea/textarea';
import styles from './comment-form.module.scss';

interface CommentFormProps {
  onSubmit?: (a: { value: string }) => void;
  onClose?: () => void;
  showCloseButton?: boolean;
}

const CommentForm = ({
  onSubmit = () => {},
  onClose = () => {},
  showCloseButton = false,
}: CommentFormProps): JSX.Element => {
  const [isShowSuccessText, setIsShowSuccessText] = useState(false);
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(true);

  const inputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    setIsValid(true);
  };

  const submitHandler = () => {
    setIsValid(true);
    if (!input) {
      setIsValid(false);
      return;
    }
    onSubmit({ value: input });
    setInput('');
    setIsShowSuccessText(true);
    setTimeout(() => {
      setIsShowSuccessText(false);
    }, 800);
  };

  return (
    <div>
      <div className={styles.commentForm__inner}>
        <Textarea
          value={input}
          onInput={inputHandler}
          placeholder={'Add a comment...'}
          error={!isValid}
        />
        <button
          className={styles.commentForm__sendButton}
          disabled={isShowSuccessText}
          onClick={submitHandler}
        >
          {isShowSuccessText ? 'Sended!' : 'Send'}
        </button>
      </div>
      {showCloseButton && <button onClick={() => onClose()}>Close</button>}
    </div>
  );
};

export default CommentForm;
