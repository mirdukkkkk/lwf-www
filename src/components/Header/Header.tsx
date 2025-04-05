import { Component } from "preact";
import styles from "./Header.module.styl";
import { Link } from "wouter-preact";

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
                    {Header.links.map(({ to, label }) => (
                        <Link
                            to={to}
                            className={(isActive) =>
                                isActive ? styles.active : ""
                            }
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export { Header };
