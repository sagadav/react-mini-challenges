export interface Comment {
  id: number;
  text: string;
  children: number[];
  date: string;
  depth?: number;
  // isRepliesOpen?: boolean;
  // username?: string;
}
