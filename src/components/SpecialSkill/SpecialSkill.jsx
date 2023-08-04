import './SpecialSkill.scss'
import Select from 'react-select'
import { customStyles } from './../../data/select-style'
import { skills } from './../../data/options'
import Delete from './../../assets/icons/Delete.svg'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../context/ContextProvider'

const SpecialSkill = () => {
    const { selectedSkills, handleSkillChange, handleLevelSelect, handleDeleteSkill } = useContext(MainContext)

    useEffect(() => {
        console.log(selectedSkills);
    }, [selectedSkills]);
    return (
        <>
        <div className="skill-ques1">
                <span>Hansı xüsusi bacarığınız var?</span>
                <Select
                    styles={customStyles}
                    options={skills}
                    isMulti={true}
                    value={selectedSkills}
                    placeholder={"Seçin..."}
                    onChange={handleSkillChange}
                />
            </div>
            {selectedSkills.length >= 1 &&
                <div className="type-accepting">
                    <span>Qeyd etdiyiniz fəaliyyətlə hansı səviyyədə məşğulsunuz? </span>
                    <ul className='lists-radios'>
                        {selectedSkills.map(data => {
                            return <li className="radios" key={data.value}>
                                <div className='special'>
                                    <label htmlFor="delete">{data.value}</label>
                                    <img src={Delete} alt="delete" onClick={() => handleDeleteSkill(data.id)} />
                                </div>
                                <div>
                                    <label htmlFor={`amateur-${data.value}`}>Həvəskar</label>
                                    <input
                                        type="radio"
                                        id={`amateur-${data.value}`}
                                        name={`selecting`}
                                        value="amateur"
                                        checked={data.level === 'amateur'}
                                        onChange={() => handleLevelSelect(data.id, 'amateur')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`professional-${data.value}`}>Peşəkar</label>
                                    <input
                                        type="radio"
                                        id={`professional-${data.value}`}
                                        name={`selecting`}
                                        value="professional"
                                        checked={data.level === 'professional'}
                                        onChange={() => handleLevelSelect(data.id, 'professional')}
                                    />
                                </div>
                            </li>
                        })}
                    </ul>
                </div>}
        </>
    )
}

export default SpecialSkill