import { Component } from "preact";

import { Header, Router } from "@components";

import "./styles/index.styl";
import "./styles/prism.css";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Router />
            </>
        );
    }
}

export default App;
