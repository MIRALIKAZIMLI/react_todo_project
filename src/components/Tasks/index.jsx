import Task from "../Task";
import styles from "./tasks.module.css";

function Tasks({tasks, onCompleted, onDelete}) {
    const taskQuantity = tasks.length;
    const completedTask = tasks.filter(task => task.isCompleted).length;
    return ( 
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Create</p>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>{completedTask} of {taskQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onCompleted={onCompleted} onDelete={onDelete}/>
                 ))}
            </div>
        </section>
     );
}

export default Tasks;