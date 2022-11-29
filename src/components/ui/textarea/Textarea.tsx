import React from 'react';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = (props: TextareaProps): JSX.Element => {
  return (
    <div>
      <textarea
        {...props}
        style={{
          fontFamily: 'sans-serif',
          fontSize: '1rem',
          padding: '12px 24px',
          width: '100%',
          resize: 'none',
          height: '100px',
        }}
      ></textarea>
    </div>
  );
};

export default Textarea;
