import { MdDeleteForever } from "react-icons/md"
const Note = ({id, text, date, handleDeleteNote}) => {
    return(
        <div className="note">
            <span>{text}</span>
            <div className="noteFooter">
                <small>{date}</small>
                <MdDeleteForever onClick={()=> handleDeleteNote(id)} className="deleteIcon" size='1.3em' ></MdDeleteForever>
            </div>
        </div>
    )
}

export default Note; 