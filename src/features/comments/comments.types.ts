export interface IComment {
  id: number;
  text: string;
  children: number[];
  depth?: number;
}
