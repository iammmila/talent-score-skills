import React, { useContext } from 'react'
import './SecondSubstage.scss'
import { MainContext } from '../../context/ContextProvider'

const SecondSubstage = () => {
    const { selectedSkills } = useContext(MainContext)
    return (
        <ul className='skills-lists'>
            {selectedSkills
                .filter(data => data.level === 'professional')
                .map(data => {
                    return (
                        <li className='skill-list' key={data.value}>
                            <span>{data.value} bacarığınıza görə əldə etdiyiniz nailiyyəti qeyd edin.*</span>
                            <div>
                                <input className='achievement' type="text" />
                                <div>
                                    <label htmlFor="no">Yoxdur</label>
                                    <input type="radio" name="no" id="no" />
                                </div>
                            </div>
                        </li>
                    )
                })}
        </ul >
    )
}

export default SecondSubstage