type ReviewType = {
  id: string;
  avatar: string;
  userName: string;
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
