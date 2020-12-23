import { Component, ReactNode } from 'react';
interface ContextInterface {
    staticContext?: any;
}
interface RedirectInterface extends ContextInterface {
    status?: number;
    to: string | object;
}
export default class Redirect extends Component<RedirectInterface, ContextInterface> {
    constructor(props: any);
    render(): ReactNode;
}
export {};
