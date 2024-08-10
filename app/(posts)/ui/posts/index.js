import Post from "../post";
import { POST_TYPES } from "@/utils/constants";

// Can be fetched from API
import { postData } from "@/utils/data";

const Posts = () => {
  return (
    <div>
      <Post
        type={POST_TYPES.CREATE}
        emoji="💬"
        text="To fhir aaj kya post kara jaaye bhai?"
      />
      {postData.map((post) => (
        <Post key={post.id} type={POST_TYPES.POST} {...post} />
      ))}
    </div>
  );
};

export default Posts;
