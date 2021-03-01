
  export const getPostsBySlug = ({ mic: { data } }, slug) => {

    console.log(data)
    return data.find((data) => slug == data.id);
  };

  export const getPostsUserBySlug = ({ users: { allPosts } }, slug) => {

    console.log(allPosts)
    return allPosts.find((data) => slug == data.id);
  };