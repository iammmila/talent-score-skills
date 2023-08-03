import { createContext, useState } from "react";
import FirstSubstage from './../components/FirstSubstage/FirstSubstage';
import SecondSubstage from './../components/SecondSubstage/SecondSubstage';
export const MainContext = createContext(null);

function ContextProvider({ children }) {
    //! USESTATES
    const [currentStep, setCurrentStep] = useState(1)
    const renderComponent = () => {
        if (currentStep === 1) { return <FirstSubstage /> }
        else { return <SecondSubstage /> }
    }
    
    // !functions
    const handleNext = () => {
        setCurrentStep(2)
    };
    const handlePrevious = () => {
        setCurrentStep(1)
    };

    //!VALUES
    const values = {
        currentStep, setCurrentStep, renderComponent, handleNext, handlePrevious
    };

    return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}

export default ContextProvider;
