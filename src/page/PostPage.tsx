import { useParams } from "react-router-dom";
import GreenTopBox from "../component/elements/greenTopBox";

function PostPage() {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }

  return (
    <main>
      <div>Post Page</div>
      <GreenTopBox />
    </main>
  );
}
export default PostPage;
