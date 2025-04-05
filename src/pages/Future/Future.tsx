import { Component } from "preact";
import { CodeBlock } from "@components";

class Future extends Component {
    render() {
        return (
            <CodeBlock
                language={"json"}
            >{`{"error":true,"code":404}`}</CodeBlock>
        );
    }
}

export { Future };
