import axios from "axios";
import { ApiBaseUrl } from "../../shared/apiConfig";

export interface createPostDto {
  title: string;
  content: string;
  author: string;
}

export function submitPostData(psotData: createPostDto) {
  axios
    .post(`${ApiBaseUrl}/api/post/create`, psotData)
    .then((res) => {
      if (res.status === 200) {
        console.log("Post created");
      }
    })
    .catch((e) => {
      console.log(e);
    });
  //axios
  return null;
}
