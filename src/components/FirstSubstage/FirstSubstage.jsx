import { useContext, useEffect } from 'react'
import './FirstSubstage.scss'
import { MainContext } from '../../context/ContextProvider'
import SpecialSkill from './../SpecialSkill/SpecialSkill';

const FirstSubstage = () => {
    const { handleSkillAnswerSelect, answerSelected } = useContext(MainContext)
    useEffect(() => {
    }, [answerSelected]);
    return (
        <div className='firstSubstage'>
            <div className="special-skill">
                <span>Xüsusi bacarığınız var?*</span>
                <div className="question">
                    <div>
                        <label htmlFor="yes">Bəli</label>
                        <input
                            type="radio"
                            id="yes"
                            value={"yes"}
                            name="experience"
                            checked={answerSelected === 'yes'}
                            onChange={handleSkillAnswerSelect}
                        />
                    </div>
                    <div>
                        <label htmlFor="no">Xeyr</label>
                        <input
                            type="radio"
                            name="experience"
                            id="no"
                            value={"no"}
                            checked={answerSelected === 'no'}
                            onChange={handleSkillAnswerSelect}
                        />
                    </div>
                </div>
            </div>
            {answerSelected === 'yes' && <SpecialSkill />}
        </div>
    )
}

export default FirstSubstage