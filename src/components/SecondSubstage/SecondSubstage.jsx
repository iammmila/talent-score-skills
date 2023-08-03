import React from 'react'
import './SecondSubstage.scss'

const SecondSubstage = () => {
    return (
        <ul className='skills-lists'>
            <li className='skill-list'>
                <span>Rəsm bacarığınıza görə əldə etdiyiniz nailiyyəti qeyd edin.*</span>
                <div>
                    <input className='achievement' type="text" />
                    <div>
                        <label htmlFor="no">Yoxdur</label>
                        <input type="radio" name="no" id="no" />
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default SecondSubstage