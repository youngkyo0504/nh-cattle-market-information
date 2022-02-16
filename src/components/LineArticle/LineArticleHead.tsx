import { ArticleData } from "../../@types";

interface LineArticleHeadProps {
  data: ArticleData<any>;
}
const LineArticleHead = ({ data }: LineArticleHeadProps) => {
  return (
    <>
      <div className="relative border-blue  border-b-[1px] border-solid">
        <div className="text-gray-subtitle font-bold pb-6 px-12 text-subtitle">
          {" "}
          {data.title}
        </div>
      </div>
    </>
  );
};

export default LineArticleHead;
