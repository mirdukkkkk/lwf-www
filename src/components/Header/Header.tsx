import { Component } from "preact";
import { Link } from "wouter-preact";
import { routes } from "@data";
import styles from "./Header.module.styl";

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.name}>
                    <div>Light</div>
                    <div>Weight</div>
                    &nbsp;
                    <div>Format</div>
                </div>
                <div className={styles.links}>
                    {routes
                        .filter(({ name }) => name)
                        .map(({ path, name }) => (
                            <Link
                                to={path}
                                key={path}
                                className={(isActive) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                {name}
                            </Link>
                        ))}
                </div>
            </div>
        );
    }
}

export { Header };
