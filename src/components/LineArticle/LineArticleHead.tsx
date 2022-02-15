import { ArticleData } from "../../@types";

interface LineArticleHeadProps {
  data: ArticleData<any>;
}
const LineArticleHead = ({ data }: LineArticleHeadProps) => {
  return (
    <>
      <div className="relative border-blue  border-b-[1px] border-solid">
        <div className="text-gray-subtitle font-bold pb-4 px-5 text-2xl">
          {" "}
          {data.title}
        </div>
      </div>
    </>
  );
};

export default LineArticleHead;
