import './SpecialSkill.scss'
import Select from 'react-select'
import { customStyles } from './../../data/select-style'
import { skills } from './../../data/options'
import Delete from './../../assets/icons/Delete.svg'

const SpecialSkill = () => {

    return (
        <>
            <div className="skill-ques1">
                <span>Hansı xüsusi bacarığınız var?</span>
                <Select
                    styles={customStyles}
                    options={skills}
                    value={'hhh'}
                    placeholder={"Seçin..."}
                />
            </div>
            <div className="type-accepting">
                <span>Qeyd etdiyiniz fəaliyyətlə hansı səviyyədə məşğulsunuz? </span>
                <div className="radios">
                    <div className='special'>
                        <label htmlFor="delete">Resm</label>
                        <img src={Delete} alt="delete" />
                    </div>
                    <div>
                        <label htmlFor="appeal">Həvəskar</label>
                        <input
                            type="radio"
                            id="amateur"
                            name="selecting"
                            value="amateur"
                        />
                    </div>
                    <div>
                        <label htmlFor="both">Peşəkar</label>
                        <input
                            type="radio"
                            id="professional"
                            name="selecting"
                            value="professional"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialSkill