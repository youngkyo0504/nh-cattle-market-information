import { ArticleData, CowInfo } from "../../@types";

interface ILineArticleList {
  data: ArticleData<CowInfo>;
}
const LineArticleList = ({ data }: ILineArticleList) => {
  return (
    <>
      <div className="w-full  flex flex-col">
        <div className=" sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-10 min-w-full sm:px-6 lg:px-8">
            <div className=" ">
              <table className="table-auto text-gray-info min-w-full text-left ">
                <tbody>
                  {data.data.map((cow, index) => (
                    <tr className=" bg-white text-3xl h-12  ">
                      <td className="text-black  pl-6  py-4  font-medium whitespace-nowrap dark:text-white">
                        {index + 1}
                      </td>
                      <td className=" text-xl w-4 pr-6 font-medium text-blue whitespace-nowrap dark:text-white">
                        <a
                          className=" hover:bg-blue hover:text-white border-solid  border-blue-800 text-blue  px-4 py-2 border-[0.5px] rounded-3xl  "
                          target={"#"}
                          href={`https://www.aiak.or.kr/ka_hims/ka_s102.jsp?type=barcode&var=${cow.id}`}
                        >
                          {cow.id + " > "}
                        </a>
                      </td>
                      <td
                        className={
                          (cow.sex === "암"
                            ? "text-pink-500 "
                            : "text-blue-500 ") +
                          " pr-16 text-3xl font-medium  whitespace-nowrap dark:text-white"
                        }
                      >
                        {cow.sex}
                      </td>
                      <td
                        className={
                          " text-3xl font-medium text-gray-600  whitespace-nowrap dark:text-white"
                        }
                      >
                        {cow.marketName}
                      </td>

                      <td className=" px-6 text-3xl text-red whitespace-nowrap dark:text-gray-400 last:text-right">
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
