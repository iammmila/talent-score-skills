import React, { useContext } from "react";
import "./ButtonNext.scss";
import { MainContext } from "./../../../context/ContextProvider";

const ButtonNext = () => {
  const { handleNext, currentStep } = useContext(MainContext);
  const isNextButtonDisabled = currentStep === 2;

  const handleClick = async (event) => {
    event.preventDefault();
    handleNext();
  };
  return (
    <button
      className="button-next"
      disabled={isNextButtonDisabled}
      type="submit"
      onClick={handleClick}
    >
      Növbəti
    </button>
  );
};

export default ButtonNext;
