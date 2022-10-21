import { MdDeleteForever } from "react-icons/md"
const Note = ({id, text, date}) => {
    return(
        <div className="note">
            <span>{text}</span>
            <div className="noteFooter">
                <small>{date}</small>
                <MdDeleteForever className="deleteIcon" size='1.3em'></MdDeleteForever>
            </div>
        </div>
    )
}

export default Note;