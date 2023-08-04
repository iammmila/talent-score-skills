// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./FormSide.scss";
import Sections from "../Sections/Sections";
import ProgressBar from "@ramonak/react-progress-bar";
import ButtonPrevious from './../Buttons/ButtonPrevious/ButtonPrevious';
import { MainContext } from "../../context/ContextProvider";

const FormSide = () => {
  const { renderComponent, progress, buttons } = useContext(MainContext)

  return (
    <div className="main-form">
      <Sections />
      <div className="form-side">
        <h6>Xüsusi Bacarıqlar</h6>
        <ProgressBar
          barContainerClassName="bg"
          completed={progress()}
          bgColor="#038477"
          animateOnRender={true}
          isLabelVisible={false}
        />{" "}
        <form
          className="form-side__form"
        >
          {renderComponent()}
          <div className="buttons">
            <div className="buttons-container">
              <ButtonPrevious />
            </div>

            {buttons()}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSide;
