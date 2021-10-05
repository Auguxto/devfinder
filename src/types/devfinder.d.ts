export type Theme = {
  name: string;
  background: string;
  header: {
    title: string;
    switch: string;
  };
  search: {
    background: string;
    text: string;
    icon: string;
    button: string;
    buttonText: string;
  };
  infos: {
    background: string;
    user: {
      user: string;
      company: string;
      bio: string;
      date: string;
    };
  };
  analytics: {
    background: string;
    info: string;
    value: string;
  };
  details: {
    icon: string;
    icon_disabled: string;
    text: string;
    text_disabled: string;
  };
};

type Response = {
  data: {
    data: {
      user: User;
    };
  };
};

type User = {
  avatarUrl: string;
  bio: string;
  company: string;
  createdAt: Date;
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  location: string;
  login: string;
  name: string;
  repositories: {
    totalCount: number;
  };
  twitterUsername: string;
  websiteUrl: string;
};
