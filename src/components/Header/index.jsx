import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import styles from "./header.module.css";
import { CiCirclePlus } from "react-icons/ci";

function Header({handleAddTask}) {
    const [title,setTitle] = useState('')

    function handleSubmit(event) {
         event.preventDefault();
         
         handleAddTask(title)
         setTitle('')
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    return ( 
        <header className={styles.header}>
            <img src={Logo} alt="Logo" />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input placeholder="add a new task" type="text" onChange={onChangeTitle} value={title}  />
                <button>Create<CiCirclePlus size={20} /></button>
            </form>
        </header>
     );
}

export default Header;