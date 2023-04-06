export const TaskCard = (props) => {

    const {name, completed} = props;

    return (
        <li>
            <article>
                <h4>{name}</h4>
                <input type="checkbox" checked={completed} />
                <button>Edit</button>
                <button>Delete</button>
            </article>
        </li>
    );
};