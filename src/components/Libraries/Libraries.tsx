import { Component } from "preact";
import { libraries } from "@data";
import styles from "./Libraries.module.styl";

class Libraries extends Component {
    render() {
        return (
            <div className={styles.libraries_block}>
                <div className={styles.block_name}>Links to libraries</div>
                <div className={styles.libraries_list}>
                    {libraries.map(({ language, elements }) => (
                        <div>
                            <div key={language}>{language}</div>
                            <li>
                                {elements.map(({ name, link }) => (
                                    <ul key={name}>
                                        <span>
                                            <img
                                                src={"/library.svg"}
                                                alt={"Library"}
                                                width={16.5}
                                                height={22}
                                            />
                                        </span>
                                        <a href={link} target={"_blank"}>
                                            {name}
                                        </a>
                                    </ul>
                                ))}
                            </li>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export { Libraries };
