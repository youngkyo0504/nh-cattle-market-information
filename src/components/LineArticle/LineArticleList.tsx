import { ArticleData, CowInfo } from "../../@types";
// import { color, ColorProps, layout, space } from "styled-system";
// import ArticleData from "../../@types/ArticleData";
// import { CowInfo } from "../../@types";

// const StyledLineArticleList = styled.ul`
//   padding: 25px 15px;
// `;

// const LineArticleItemOrder = styled.div<ColorProps>`
//   flex-basis: 20px;
//   margin-right: 10px;
//   text-align: center;
//   ${color}
// `;

// const LineArticleItem = styled.div`
//   display: flex;
//   margin-top: 25px;
//   &:nth-child(1) {
//     margin-top: 0px;
//   }
// `;

// const LineArticleItemTitle = styled.div`
//   flex: 1;
// `;
// const LineArticleItemChange = styled.div`
//   flex-basis: 80px;
//   margin-left: 10px;
//   text-align: right;
// `;
// const Price = styled.span`
//   color: #d60000 !important ;
// `;

interface ILineArticleList {
  data: ArticleData<CowInfo>;
}
const LineArticleList = ({ data }: ILineArticleList) => {
  return (
    <>
      <div className="w-full overflow-x-auto flex flex-col">
        <div className=" sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className=" ">
              <table className="min-w-full text-left ">
                <tbody>
                  {data.data.map((cow, index) => (
                    <tr className=" bg-white  ">
                      <td className="text-blue-900 py-2 px-6 text-sm font-medium whitespace-nowrap dark:text-white">
                        {index + 1}
                      </td>
                      <td className="py-2 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-white">
                        <a
                          className=" hover:text-blue-700 "
                          target={"#"}
                          href={`https://www.aiak.or.kr/ka_hims/ka_s102.jsp?type=barcode&var=${cow.id}`}
                        >
                          {cow.id}
                        </a>
                      </td>
                      <td
                        className={
                          "py-2 px-6 text-sm font-medium text-gray-600  whitespace-nowrap dark:text-white"
                        }
                      >
                        {cow.marketName}
                      </td>
                      <td
                        className={
                          (cow.sex === "암"
                            ? "text-pink-500 "
                            : "text-blue-500 ") +
                          "py-2 px-6 text-sm font-medium  whitespace-nowrap dark:text-white"
                        }
                      >
                        {cow.sex}
                      </td>
                      <td className="py-2 px-6 text-sm text-red-500 whitespace-nowrap dark:text-gray-400 last:text-right">
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
