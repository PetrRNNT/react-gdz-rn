import React, {useState} from "react";
import NavBar from "../../Components/NavBar";
import defaultImage from '../../images/svg/Vector.svg'

import style from './style.module.css'


const handleSubmit = async (event, uploadImg) => {
    event.preventDefault()
    const formdata = new FormData(document.getElementById("uploadForm"))
    const object = {}
    formdata.forEach(function (value, prop) {
        object[prop] = value
    })
    const json = JSON.stringify(object)
    const response = await fetch("https://test-job.pixli.app/send.php", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        action: "send_data",
        contact: json,
        id: 1,
    })
        .then(response => console.log('response', response))
        .catch(error => console.log(error))
}

const FormPage = () => {

    const [uploadImg, setUploadImage] = useState(defaultImage)

    /* Handler input type=file */
    const handlerImg = (event) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setUploadImage(reader.result)
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    return (
        <>
            <div className={style.content}>
                <NavBar/>
                <h2 className={style.title}>
                    FormPage
                </h2>
                <form id="uploadForm">
                    <div className={style.lineGroup}>
                        <label>Имя
                            <input type="text" name="name"/>
                        </label>
                    </div>
                    <div className={style.lineGroup}>
                        <label>Фамилия
                            <input type="text" name="surname"/>
                        </label>
                    </div>
                    <div className={style.lineGroup}>
                        <label>Отчество
                            <input type="text" name="patronymic"/>
                        </label>
                    </div>
                    <div className={style.imageUpload}>Фото
                        <label htmlFor="file-input">
                            <img src={uploadImg}/>
                        </label>

                        <input id="file-input" type="file" name="image" accept="image/*"
                               onChange={handlerImg}/>
                    </div>
                    <button
                        type={"submit"}
                        className={style.saveButton}
                        onClick={handleSubmit}
                    >
                        Сохранить
                    </button>
                </form>
                <div className={style.responseContainer}>
                </div>
            </div>
        </>
    )
}

export default FormPage