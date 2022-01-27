import { ArticleData } from "../../@types";

interface LineArticleHeadProps {
  data: ArticleData<any>;
}
const LineArticleHead = ({ data }: LineArticleHeadProps) => {
  return (
    <>
      <div className="relative border-gray-300  border-b-[1px] border-solid">
        <div className="text-blue-900 font-bold py-2 px-3"> {data.title}</div>
      </div>
    </>
  );
};

export default LineArticleHead;
