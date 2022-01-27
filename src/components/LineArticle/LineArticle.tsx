// import styled from "styled-components/macro";
// import { color, layout, space } from "styled-system";
// import LineArticleHead from "./LineArticleHead";
// import LineArticleList from "./LineArticleList";
// import ArticleData from "../../@types/ArticleData";
// import { useState } from "react";
// import Pagination from "react-js-pagination";

import { ArticleData, CowInfo } from "../../@types";
import LineArticleHead from "./LineArticleHead";
import LineArticleList from "./LineArticleList";

// const LineArticleContainer = styled.div`
//   ${space}
//   ${layout}
//   ${color};
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   background: #fff;
//   box-shadow: 2px 2px 4px #dee1e7;
//   margin-bottom: 10px;

//   & .pagination {
//     display: flex;
//     justify-content: center;
//     list-style: none;
//     padding: 0;

//     li {
//       display: inline-block;
//       width: 20px;
//       height: 20px;
//       border: 1px solid #e2e2e2;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 1rem;
//     }
//     li:first-child {
//       border-radius: 2px 0 0 2px;
//     }
//   }
//   li:last-child {
//     border-radius: 2px 0 0 2px;
//   }
//   li a {
//     text-decoration: none;
//     color: #337ab7;
//     font-size: 1rem;
//   }
//   li.active a {
//     color: white;
//   }
//   li.active {
//     background-color: #337ab7;
//   }
//   li a:hover,
//   li a.active {
//     color: blue;
//   }
// `;

// const StyledPagination = styled(Pagination)``;

interface ILineArticleProps {
  data: ArticleData<any>;
}

const LineArticle = ({ data }: ILineArticleProps) => {
  return (
    <div className="w-full flex flex-col sm:ml-12 flex-1 mb-3">
      {/* head */}
      <LineArticleHead data={data} />
      {/* list */}
      <LineArticleList data={data} />
    </div>
    // <LineArticleContainer>
    //   <LineArticleHead
    //     data={data}
    //   />
    //   <LineArticleList data={data[page - 1]} />
    // </LineArticleContainer>
  );
};

export default LineArticle;
