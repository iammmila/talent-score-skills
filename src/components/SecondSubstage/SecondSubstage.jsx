import { useContext, useEffect } from 'react'
import './SecondSubstage.scss'
import { MainContext } from '../../context/ContextProvider'

const SecondSubstage = () => {
    const { selectedSkills, handleAchievementChange, handleNoChange } = useContext(MainContext)
    useEffect(() => { console.log(selectedSkills) }, [selectedSkills])
    return (
        <ul className='skills-lists'>
            {selectedSkills
                .filter(data => data.level === 'professional')
                .map(data => {
                    return (
                        <li className='skill-list' key={data.value}>
                            <span>{data.value} bacarığınıza görə əldə etdiyiniz nailiyyəti qeyd edin.*</span>
                            <div>
                                <input
                                    className='achievement'
                                    type="text"
                                    value={data.achievement || ''}
                                    onChange={(e) => handleAchievementChange(data.id, e.target.value)}
                                />
                                <div>
                                    <label htmlFor={`no-${data.id}`}>Yoxdur</label>
                                    <input
                                        type="radio"
                                        name={`no-${data.id}`}
                                        id={`no-${data.id}`}
                                        checked={!data.achievement}
                                        onChange={(e) => handleNoChange(data.id, e.target.checked)}
                                    />
                                </div>
                            </div>
                        </li>
                    )
                })}
        </ul >
    )
}

export default SecondSubstage