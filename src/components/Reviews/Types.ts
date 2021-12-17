type ReviewType = {
  commentID: string;
  avatar: string;
  userName: string;
  score: 'perfect' | 'good' | 'satisfactory' | 'poor';
  publicationDate: Date;
  text: string;
  likesNumber: number;
  liked: boolean;
};

type ReviewsType = {
  title: string;
  reviews: ReviewType[];
};

export type { ReviewType, ReviewsType };
