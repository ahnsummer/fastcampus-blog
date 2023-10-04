import Header from "components/Header";
import Footer from "components/Footer";
import PostList from "components/PostList";

export const PostsPage = () => {
  return (
    <>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
};

export default PostsPage;
