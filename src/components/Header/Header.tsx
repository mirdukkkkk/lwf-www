import { Component } from "preact";
import { Link } from "wouter-preact";
import { routes } from "@data";
import styles from "./Header.module.styl";

class Header extends Component {
    static links: { to: string; label: string }[] = [
        { to: "/", label: "About" },
        { to: "/specifications", label: "Specs" },
        { to: "/future", label: "Future" }
    ];

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
