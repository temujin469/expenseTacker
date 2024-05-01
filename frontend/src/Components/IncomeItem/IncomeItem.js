import React from "react";
import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  dollar,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/Icons";
import Button from "../Button/Button";
import { useThemeContext } from "../../context/ThemeContext";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  console.log("type", type);

  const { currentColor } = useThemeContext();

  return (
    // <IncomeItemStyled indicator={indicatorColor}>
    <div className=" w-full rounded-3xl p-10 relative shadow-md border border-gray-50">
      <div className="space-y-2">
        <div className="flex gap-5 items-center flex-wrap md:flex-nowrap">
          <div className="flex items-center gap-2">
            <div style={{ color: currentColor }}>
              {type === "expense" ? expenseCatIcon() : categoryIcon()}
            </div>
            <h5 className="text-lg font-semibold text-gray-700">{title}</h5>
          </div>
          <p className="text-lg whitespace-nowrap font-semibold flex gap-2 text-gray-700">
            <div style={{ color: currentColor }} className="font-bold text-xl">
              ₮
            </div>
            {amount}
          </p>
          <p className="whitespace-nowrap text-lg flex gap-2 items-center font-semibold text-gray-700">
            <div style={{ color: currentColor }}>{calender}</div>
            {dateFormat(date)}
          </p>
        </div>

        <div className="flex gap-5 justify-between items-end">
          <div className="text flex gap-6 items-center justify-between">
            <p className="flex gap-2 items-center">
              <div style={{color:currentColor}}>{comment}</div>
              {description}
            </p>
          </div>
          <div className="rounded-full shadow-md">
            {/* <Button
              icon={trash}
              bPad={"1rem"}
              bRad={"50%"}
              className="bg-gray-50"
              bg={"#fff"}
              color={"#FF0000"}
              iColor={"#FF0000"}
              hColor={"var(--color-green)"}
              onClick={() => deleteItem(id)}
            /> */}
            <button className="absolute hover:text-red-500 text-red-400 flex justify-center top-3 right-3 items-center">
              {trash}
            </button>
          </div>
        </div>
      </div>
    </div>
    // </IncomeItemStyled>
  );
}

const IncomeItemStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2.6rem;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${(props) => props.indicator};
      }
    }

    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
        }
      }
    }
  }
`;

export default IncomeItem;
