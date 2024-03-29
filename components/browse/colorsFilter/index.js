import {useState} from "react";
import {BsPlusLg} from "react-icons/bs";
import {FaMinus} from "react-icons/fa";
import styles from "../styles.module.scss";

export default function ColorsFilter({colors, colorHandler, replaceQuery}) {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.filter}>
            <h3 onClick={() => setShow(!show)}>
                Colors <span>{show ? <FaMinus/> : <BsPlusLg/>}</span>
            </h3>
            {show && (
                <div className={styles.filter__colors}>
                    {colors.map(color => {
                        const check = replaceQuery("color", color);
                        return (
                            <button
                                key={color}
                                style={{background: `${color}`}}
                                className={check.active ? styles.activeFilterColor : ""}
                                onClick={() => colorHandler(check.result)}
                            ></button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
