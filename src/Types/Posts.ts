export interface postsProps {
  username: string;
  posts?: Array<post>;
}

export interface post {
  _id: string;
  createdAt: string;
  title: string;
  body: string;
  likes?: number;
  likesData?: Array<string>;
  author: { username: string; displayName: string };
}
