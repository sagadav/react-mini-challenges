import ReactTextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';

interface TextareaProps extends TextareaAutosizeProps {
  error?: boolean;
}

const Textarea = (props: TextareaProps): JSX.Element => {
  const { error, ...otherProps } = props;
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ReactTextareaAutosize
        minRows={2}
        {...otherProps}
        style={{
          fontFamily: 'sans-serif',
          fontSize: '1rem',
          padding: '12px 24px',
          width: '100%',
          resize: 'none',
          display: 'block',
          borderColor: error ? 'red' : undefined,
          ...(props?.style ?? {}),
        }}
      ></ReactTextareaAutosize>
    </div>
  );
};

export default Textarea;
