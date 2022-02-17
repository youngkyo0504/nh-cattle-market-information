import { ArticleData, CowInfo } from "../../@types";

interface ILineArticleList {
  data: ArticleData<CowInfo>;
}
const LineArticleList = ({ data }: ILineArticleList) => {
  return (
    <>
      <div className="w-full  flex flex-col">
        <div>
          <div className=" py-7 min-w-full overflow-x-auto  ">
            <div className=" ">
              <table className="table-fixed border-collapse text-gray-info min-w-full text-left ">
                <tbody>
                  {data.data.map((cow, index) => (
                    <tr className=" bg-white text-table h-8   ">
                      <td className="text-gray-subtitle pb-[1.5rem]  pl-12 pr-12   font-medium whitespace-nowrap ">
                        <span>{index + 1}</span>
                      </td>
                      <td className="pr-16 pb-[1.5rem] -tracking-[0.024rem]  w-4  font-medium text-blue whitespace-nowrap ">
                        <a
                          className="transition-all ease-out hover:bg-blue hover:text-white border-solid  border-blue-800 text-blue pr-[21px] pl-[25px] py-1 border-[0.5px] rounded-3xl    "
                          target={"#"}
                          href={`https://www.aiak.or.kr/ka_hims/ka_s102.jsp?type=barcode&var=${cow.id}`}
                        >
                          {cow.id + " >"}
                        </a>
                      </td>
                      <td
                        className={
                          " pr-16 pb-[1.5rem]  -tracking-[0.5px] font-medium  whitespace-nowrap "
                        }
                      >
                        {cow.sex}
                      </td>
                      <td
                        className={
                          "pb-[1.5rem]   pr-20 -tracking-[0.5px] font-medium text-gray-600  whitespace-nowrap "
                        }
                      >
                        {cow.marketName}
                      </td>

                      <td className="pb-[1.5rem] font-medium pr-8  text-red whitespace-nowrap last:text-right -tracking-[0.5px]">
                        {cow.price}
                      </td>
                    </tr>
                  ))}
                  {/* Product 1 */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
    // <StyledLineArticleList>
    //   <li>
    //     {data.data.map((item, index) => (
    //       <LineArticleItem>
    //         <LineArticleItemOrder color={index < 3 ? "chartRed" : "black"}>
    //           <span>{index + 1}</span>
    //         </LineArticleItemOrder>
    //         <LineArticleItemTitle>
    //           <span>{item.kpn}</span>
    //         </LineArticleItemTitle>
    //         <LineArticleItemChange>
    //           <Price>{item.price + "원"}</Price>
    //         </LineArticleItemChange>
    //       </LineArticleItem>
    //     ))}
    //   </li>
    // </StyledLineArticleList>
  );
};

export default LineArticleList;
