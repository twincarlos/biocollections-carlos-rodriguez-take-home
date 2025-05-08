import "./Menu.css";

function Menu({ items }) {
    return (
        <div className="card menu padding-xs">
            <ul className="flex flex-direction--column flex-justify-content--center">
                {
                    items.map((item, index) => (
                        <li key={index} className="menu-item">{item}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Menu;