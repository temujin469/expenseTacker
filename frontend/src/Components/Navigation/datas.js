import {
    FcBarChart,
    FcConferenceCall,
    FcViewDetails,
    FcTodoList,
    FcPlus,
    FcNews,
  } from "react-icons/fc";
  
  export const links = [
    {
      title: "Хянах самбар",
      links: [
        {
          name: "Хураангуй",
          path: "/",
          icon: <FcBarChart />,
        },
        {
          name: "Зарлага",
          path: "expenses",
          icon: <FcTodoList />,
        },
        {
          name: "Орлого",
          path: "income",
          icon: <FcViewDetails />,
        },
        // {
        //   name: "Мэдээ нийтлэх",
        //   path: "add-news",
        //   icon: <FcNews />,
        // },
      ],
    },
  ];
  
  export const themeColors = [
    {
      name: "Өнгө 1",
      color: "#ff7849",
    },
    {
      name: "Өнгө 2",
      color: "#03C9D7",
    },
    {
      name: "Өнгө 3",
      color: "#7352FF",
    },
    {
      name: "Өнгө 4",
      color: "#FF5C8E",
    },
    {
      name: "Өнгө 5",
      color: "#1E4DB7",
    },
    {
      color: "#FB9678",
      name: "Өнгө 6",
    },
  ];