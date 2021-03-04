
  export const getPostsBySlug = ({ mic: { data } }, slug) => {

    return data.find((data) => slug == data.id);
  };

  export const getPostsUserBySlug = ({ users: { allPosts } }, slug) => {

    return allPosts.find((data) => slug == data.id);
  };