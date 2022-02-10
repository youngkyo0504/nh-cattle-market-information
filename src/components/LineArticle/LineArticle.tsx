import { ArticleData, CowInfo } from "../../@types";
import LineArticleHead from "./LineArticleHead";
import LineArticleList from "./LineArticleList";

interface ILineArticleProps {
  data: ArticleData<any>;
}

const LineArticle = ({ data }: ILineArticleProps) => {
  return (
    <div className=" w-full flex flex-col  flex-1 mb-3">
      {/* head */}
      <LineArticleHead data={data} />
      {/* list */}
      <LineArticleList data={data} />
    </div>
  );
};

export default LineArticle;
