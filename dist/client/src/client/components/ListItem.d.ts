/// <reference types="react" />
import * as React from "react";
export interface IListItemProps {
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    openTime: string;
    onClick: React.EventHandler<React.MouseEvent<HTMLElement>>;
}
export interface IListItemState {
}
export default class ListItem extends React.Component<IListItemProps, IListItemState> {
    render(): JSX.Element;
}
