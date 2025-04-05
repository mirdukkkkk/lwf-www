import { Component } from "preact";
import { Introduction, Libraries } from "@components";

class About extends Component {
    render() {
        return (
            <>
                <Introduction />
                <Libraries />
            </>
        );
    }
}

export { About };
