import { type FunctionalComponent } from "preact";
import { Route, Switch } from "wouter-preact";
import { routes } from "@data";

const Router: FunctionalComponent = () => (
    <Switch>
        {routes.map(({ path, element }) => (
            <Route path={path}>{element}</Route>
        ))}
    </Switch>
);

export { Router };
