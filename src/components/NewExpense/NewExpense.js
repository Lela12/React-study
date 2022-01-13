import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //매개변수가 확실히 예측할 수 있도록
    const expenseData = {
      ...enteredExpenseData, //submihandler 속에서 생성된 객체(사용자 입력값)
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //NewExpenseForm에서 불러오고, 위의 생성한 지출데터를 인수로써 전달
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {/* 폼이 마지막에 제출될 때 */}
      {/* prop의 값이 함수이며, 지출 폼 컴포넌트에서 불러올수있다 */}
    </div>
  );
};

export default NewExpense;
