
  export const getPostsBySlug = ({ mic: { data } }, slug) => {

    console.log(data)
    return data.find((data) => slug == data.id);
  };
