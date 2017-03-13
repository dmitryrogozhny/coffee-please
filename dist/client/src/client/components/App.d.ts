/// <reference types="react" />
import * as React from "react";
import "../css/App.scss";
export interface IAppProps {
}
export interface IAppState {
    places?: Array<CoffeePlace>;
    center?: [number, number];
    selectedPlace?: CoffeePlace;
}
export interface CoffeePlace {
    id: string;
    title: string;
    description: string;
    city: string;
    address: string;
    latitude: number;
    longitude: number;
    timetable: string;
    imageUrl: string;
}
export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps);
    readonly createClickHandler: (id: string) => (event: React.MouseEvent<HTMLElement>) => void;
    componentDidMount(): void;
    render(): React.ReactElement<{}>;
}
