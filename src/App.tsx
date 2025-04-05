import { Component } from "preact";

import { Header, Router } from "@components";

import "./styles/index.styl";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router />
            </div>
        );
    }
}

export default App;
