import {urlFront, urlBack, headersForFetch} from '../env.json'
import { useState } from 'react';
import { fetchData } from '../fetchData';

const Create = () => {
    const [url, setUrl] = useState();

    const sendData = 
        note => fetchData(
            urlBack,
            {...headersForFetch, body: JSON.stringify(note)},
            ({result, url}) => {
                if(!result) return false;
                setUrl(url);
            }
        )
    
    const loadDataFromForm = ev => {
        ev.preventDefault();

        const note = ev.target.elements.note.value.trim();
        if(note) sendData({note})
    }

    return (
        <>
            {
                !url
                ?
                <form className="form create-form" onSubmit={loadDataFromForm}>
                    <label className="form__label" htmlFor="note">Введите заметку</label>
                    <textarea className="form__textarea" name="note" id="note" placeholder="Ваша заметка"></textarea>
                    <button className="button form__button" type="submit">Создать</button>
                </form>
                :
                <div className="output create-output">
                    <p className="output__text create-output__text">{url}</p>
                    <button className="button create-output__button" onClick={()=>setUrl()}>Создать еще одну заметку</button>
                </div>
            }
        </>
    );
}

export default Create;