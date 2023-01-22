import { describe, it, expect, vi } from 'vitest';
import CommentForm from './comment-form';
import { render, screen, userEvent } from '@/utils/test-utils';

describe('CommentForm', () => {
  it('should', async () => {
    const user = userEvent.setup();
    const submit = vi.fn();
    render(<CommentForm onSubmit={submit} />);
    await user.click(screen.getByRole('textbox'));
    await user.keyboard('test');
    await user.click(screen.getByText('Send'));
    expect(submit).toHaveBeenCalledOnce();
    expect(submit).toHaveBeenCalledWith({ value: 'test' });
  });
});
