const About = () => {
    const titleText = "Для чего создан этот проект?"
    const descriptionText = [
        "Этот проект создан для создания скрытых заметок, доступных лишь по хэшу ссылки.",
        "Достаточно лишь создать заметку, скопировать хэш и ввести его в поле ввода.",
        "Вы можете скрыто обмениваться сообщениями со своим собеседником, и никто не сможет узнать о чем велась переписка."
    ]
    return (
        <div className="output about-output">
            <h2 className="text-title about-output__title">{titleText}</h2>
            {descriptionText.map((item, index)=><p key={index} className="about-output__description">{item}</p>)}
        </div>
    );
}

export default About;