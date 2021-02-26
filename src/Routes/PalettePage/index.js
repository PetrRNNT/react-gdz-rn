import {useState, useEffect} from 'react'
import {ChromePicker} from "react-color";
import NavBar from "../../Components/NavBar";
import ColorItem from "../../Components/ColorItem";

import style from './style.module.css'

const PalettePage = () => {

    const [color, setColor] = useState('#17addc')
    const [showColorPicker, setShowColorPicker] = useState(false)
    const [colorItem, setColorItem] = useState([{background: color}])
    const handleClickOutside = (e) => {
        const chromePicker = document.getElementsByClassName('chrome-picker')[0];
        if (!e.path.includes(chromePicker)) {
            const colorEditBtn = document.querySelector('#setcolors');
            if (!e.path.includes(colorEditBtn)) setShowColorPicker(showColorPicker => false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);

        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        }
    }, []);

    useEffect(() => {
        console.log(color)
    }, [color]);

    return (
        <>
            <div className={style.content}>
                <div>
                    <NavBar/>
                    <h2 className={style.title}>
                        PalettePage
                        <p style={{color: color}}>Color: {color}</p>
                    </h2>
                </div>
                {
                    showColorPicker && (
                        <>
                            <ChromePicker
                                color={color}
                                onChangeComplete={updateColor => setColor(updateColor.hex)}
                            />
                            <ColorItem color={color}/>
                        </>
                    )
                }
                <button
                    id="setcolors"
                    className={style.colorEdit}
                    onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
                >
                    {showColorPicker ? 'Закрыть палитру' : 'Добавить цвет'}
                </button>
            </div>
        </>
    )
}

export default PalettePage