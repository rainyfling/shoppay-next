import {useRouter} from "next/router";
import {useState} from "react";
import {BsPlusLg} from "react-icons/bs";
import {FaMinus} from "react-icons/fa";
import styles from "../styles.module.scss";

export default function MaterialsFilter({materials, materialHandler, replaceQuery,}) {
    const router = useRouter();
    const [show, setShow] = useState(false);

    return (
        <div className={styles.filter}>
            <h3 onClick={() => setShow(!show)}>
                Material
                <span>{show ? <FaMinus/> : <BsPlusLg/>}</span>
            </h3>

            {show && (
                <div className={styles.filter__sizes}>
                    {materials.map(material => {
                        const check = replaceQuery("material", material);
                        return (
                            <label
                                key={material}
                                htmlFor={material}
                                className={styles.filter__sizes_size}
                                onClick={() => materialHandler(check.result)}
                            >
                                <input
                                    type="checkbox"
                                    name="material"
                                    id={material}
                                    checked={check.active}
                                    onChange={() => check.result}
                                />
                                <label htmlFor={material}>
                                    {material.length > 12 ? `${material.substring(0, 12)}...` : material}
                                </label>
                            </label>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
