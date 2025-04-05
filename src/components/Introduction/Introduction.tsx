import { Component } from "preact";
import { type JSX } from "react";
import styles from "./Introduction.module.styl";

class Introduction extends Component {
    /* TODO: It is necessary to move the code block to a separate element */
    static codeblock = {
        number: "#65CB65",
        string: "#98CBCB",
        boolean: "#FEFF00",
        underline: "#659865"
    };

    static paint(
        children: JSX.Element | string,
        type: keyof typeof Introduction.codeblock
    ) {
        return (
            <span
                className={
                    type === "underline" ? styles.underlined : styles.colored
                }
                style={{ "--color": Introduction.codeblock[type] }}
            >
                {children}
            </span>
        );
    }

    render() {
        return (
            <div className={styles.card}>
                <div className={styles.description}>
                    <div className={styles.definition}>
                        <img
                            src={"/logo.svg"}
                            alt={"LWF logotype"}
                            height={111}
                            width={126}
                        />
                        <div>
                            Lightweight Format - A very compact, compression
                            friendly, binary format for storing JSON like
                            objects.
                        </div>
                    </div>
                    <div className={styles.supplementation}>
                        Using a schema with simple syntax. Suitable for use for
                        serialize packages, or storing data that is repeated
                        according to the schema, and compress for more efficient
                        size
                    </div>
                </div>
                <div className={styles.comparison}>
                    <div>
                        <div>In JSON 39 bytes</div>
                        <div className={styles.code_block}>
                            {"{"}
                            {Introduction.paint("“a”", "string")}:
                            {Introduction.paint("127", "number")},
                            {Introduction.paint("“b”", "string")}:[{"{"}
                            {Introduction.paint("“c”", "string")}:
                            {Introduction.paint("true", "boolean")},
                            {Introduction.paint("“d”", "string")}:
                            {Introduction.paint("“ready!”", "string")}
                            {"}"}]{"}"}
                        </div>
                    </div>
                    <div>
                        <div>In LWF 14 bytes</div>
                        <div className={styles.code_block}>
                            {Introduction.paint("00", "underline")}{" "}
                            {Introduction.paint(
                                <>00 {Introduction.paint("7F", "number")}</>,
                                "underline"
                            )}{" "}
                            {Introduction.paint("01 00", "underline")}{" "}
                            {Introduction.paint(
                                <>07 {Introduction.paint("01", "boolean")}</>,
                                "underline"
                            )}{" "}
                            {Introduction.paint(
                                <>
                                    08 {Introduction.paint("06", "number")}{" "}
                                    {Introduction.paint("ready!", "string")}
                                </>,
                                "underline"
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Introduction };
