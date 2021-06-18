import React, { Component } from 'react';
interface ProtectedRouteInterface {
    component: any;
    isAuthorized: boolean;
    path: string;
    exact: boolean;
    authPath: string;
}
declare class ProtectedRoute extends Component<ProtectedRouteInterface> {
    render(): React.ReactElement;
}
export default ProtectedRoute;
