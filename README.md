# ReactProtectedRoute

Protected react route.
Use for redirect users to login page from private pages.

## Usage

    import { Switch } from 'react-router-dom';
    ...
    <Switch>
        ...
        <ReactProtectedRoute
            path="/path-to-private-component"
            component={PrivateComponent}
            authPath="/login"
            isAuthorized={authCondition}
        />
        ...
    </Switch>

### Props

* `path` - the same as path of Route component.
* `component` - the same as component of Route component.
* `isAuthorized` - if this condition is true user will be redirected
* `authPath` - path to redirect
