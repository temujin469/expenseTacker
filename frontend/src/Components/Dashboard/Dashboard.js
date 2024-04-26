import React, { useEffect } from "react";
import styled from "styled-components";
import History from "../../History/History";
import { dollar } from "../../utils/Icons";
import Chart from "../Chart/Chart";
import { useGlobalContext } from "../../context/globalContext";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  console.log("df",incomes)

  return (
    <div>
      <div>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="flex w-full gap-5 flex-wrap my-10">
              <div className="border rounded-2xl px-3 py-5 flex-col items-center flex-1 shadow-sm">
                <h2 className="text-[18px] font-semibold text-gray-600">
                  Нийт орлого
                </h2>
                <p className="text-[30px] whitespace-nowrap font-bold text-gray-700">
                  ₮ {totalIncome()}
                </p>
              </div>
              <div className="border rounded-2xl px-3 py-5 flex-col items-center flex-1 shadow-sm">
                <h2 className="text-[18px] font-semibold text-gray-600">
                  Нийт зардал
                </h2>
                <p className="text-[30px] whitespace-nowrap font-bold text-gray-700">
                  ₮ {totalExpenses()}
                </p>
              </div>
              <div className="border rounded-2xl px-3 py-5 flex-col items-center flex-1 shadow-sm">
                <h2 className="text-[18px] font-semibold text-gray-600">
                  Нийт үлдэгдэл
                </h2>
                <p className="text-[30px] whitespace-nowrap font-bold text-gray-700">
                  ₮ {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <div className="flex flex-wrap w-full gap-5 mt-10">
              <div className="flex-col flex-1">
                <h2 className="text-[18px] font-semibold text-gray-600">
                  Цалин
                </h2>
                <div className="flex justify-between border rounded-2xl px-3 py-5 flex-1 shadow-sm">
                  <p className="text-[20px] whitespace-nowrap font-bold text-gray-700">Min ₮{Math.min(...incomes.map((item) => item.amount))}</p>
                  <p className="text-[20px] whitespace-nowrap font-bold text-gray-700">Max ₮{Math.max(...incomes.map((item) => item.amount))}</p>
                </div>
              </div>

              <div className="flex-col flex-1">
                <h2 className="text-[18px] font-semibold text-gray-600">
                  Зардал
                </h2>
                <div className="flex justify-between border rounded-2xl px-3 py-5 flex-1 shadow-sm">
                  <p className="text-[20px] whitespace-nowrap font-bold text-gray-700">Min ₮{Math.min(...expenses.map((item) => item.amount))}</p>
                  <p className="text-[20px] whitespace-nowrap font-bold text-gray-700">Max ₮{Math.max(...expenses.map((item) => item.amount))}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 400px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          p {
            font-size: 3.5rem;
            font-weight: 700;
          }
        }

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 4.5rem;
          }
        }
      }
    }

    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dashboard;
