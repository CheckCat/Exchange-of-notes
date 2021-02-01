import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../fetchData";
import { urlFront, urlBack, headersForFetch } from "../env.json";

const Note = () => {
    const { noteURL } = useParams();
    const [note, setNote] = useState("Загрузка...");
    useEffect(() => {
        if(!noteURL) {
            setNote();
            return false
        };
        fetchData(
            urlBack,
            {...headersForFetch, body: JSON.stringify({"url": noteURL})},
            ({result, note}) => {
                if(!result){
                    setNote();
                    return false;
                }
                setNote(note);
            }
        )
    }, [])

    const getNote = ev => {
        ev.preventDefault();

        const hash = ev.target.elements.hash.value.trim();
        if(!hash) return false;
        window.location = `${urlFront}/${hash}`;
    }
    console.log();
    return (
        <>
            {
                note
                ?
                <div className="output note-output">
                    <h4 className="text-title output__title">Note:</h4>
                    <p className="output__text">{note}</p>
                    <button className="button note-output__button" onClick={()=>window.location=urlFront}>Просмотреть еще</button>
                </div>
                :
                <>
                    <form className="form note-form" onSubmit={getNote}>
                        {noteURL && <h4 className="text-title form__title">Такой заметки не существует</h4>}
                        <label className="form__label" htmlFor="hash">Введите хэш</label>
                        <input className="form__input" placeholder="Ваш хэш" name="hash" id="hash" />
                        <button className="button form__button" type="submit">Просмотреть заметку</button>
                    </form>
                </>
            }
        </>
    );
}

export default Note;