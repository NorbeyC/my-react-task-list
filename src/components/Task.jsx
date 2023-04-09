export const Task = (props) => {

    const {name, isChecked, onChecked} = props;

    const handleCheckboxChange = () => {
      onChecked(name);
    }

    return (
        <li>
            <article>
                <h4>{name}</h4>
                <label>
                  <button onClick={handleCheckboxChange}> {isChecked ? "✅" : "◯"}</button>
                </label>
            </article>
        </li>
    );
};