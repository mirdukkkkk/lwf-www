import { Component } from "preact";
import { CodeBlock } from "@components";
import styles from "./Introduction.module.styl";

class Introduction extends Component {
    /* TODO: It is necessary to move the code block to a separate element */
    render() {
        return (
            <div className={styles.intro_block}>
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
                        <CodeBlock
                            language={"json"}
                            className={styles.block}
                        >{`{"a":127,"b":[{"c":true,"d":"ready!"}]}`}</CodeBlock>
                    </div>
                    <div>
                        <div>In LWF 14 bytes</div>
                        <CodeBlock
                            language={"lwfb"}
                            className={styles.block}
                        >{`\u200B00 00 7F \u200B00 07 01 08 06 ready!`}</CodeBlock>
                    </div>
                </div>
            </div>
        );
    }
}

export { Introduction };
