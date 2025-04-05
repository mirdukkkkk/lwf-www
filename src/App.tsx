import { Component } from "preact";

import { Header, Introduction } from "./components";

import "./styles/index.styl";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Introduction />
                <div>oneword</div>
            </div>
        );
    }
}

export default App;
