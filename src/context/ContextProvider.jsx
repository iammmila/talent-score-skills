import { createContext, useState } from "react";
import FirstSubstage from './../components/FirstSubstage/FirstSubstage';
import SecondSubstage from './../components/SecondSubstage/SecondSubstage';
export const MainContext = createContext(null);

// eslint-disable-next-line react/prop-types
function ContextProvider({ children }) {
    //! USESTATES
    const [currentStep, setCurrentStep] = useState(1)
    const [answerSelected, setAnswerSelected] = useState("");
    const [selectedSkills, setSelectedSkills] = useState([])
    const [amateur, setAmateur] = useState([])
    const [professional, setProfessional] = useState([])
    const [radioAnswerSelected, setRadioAnswerSelected] = useState('')
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
    const handleSkillAnswerSelect = (event) => {
        setAnswerSelected(event.target.value)
    }
    const handleSkillChange = (selectedOptions) => {
        setSelectedSkills(selectedOptions);
    };
    const handleLevelSelect = (skillId, level) => {
        console.log('handleLevelSelect called', skillId, level);
        const updatedSkills = selectedSkills.map((skill) => {
            if (skill.id === skillId) {
                return { ...skill, level };
            }
            return skill;
        });

        setSelectedSkills(updatedSkills);
    };
    const handleLevelAmateurSelect = (event) => {
        setAmateur(event.target.value)
    }
    const handleLevelProfessionalSelect = (event) => {
        setProfessional(event.target.value)
    }
    const progress = () => {
        if (currentStep === 1) { return 50 }
        else { return 100 }
    }

    //!VALUES
    const values = {
        currentStep,
        progress,
        setCurrentStep,
        renderComponent,
        handleNext,
        handlePrevious,
        handleSkillAnswerSelect,
        answerSelected,
        setAnswerSelected,
        selectedSkills,
        setSelectedSkills,
        handleSkillChange,
        amateur,
        setAmateur,
        professional, handleLevelSelect,
        setProfessional,
        radioAnswerSelected, handleLevelProfessionalSelect, handleLevelAmateurSelect,
        setRadioAnswerSelected
    };

    return <MainContext.Provider value={values} > {children}</MainContext.Provider >;
}

export default ContextProvider;
