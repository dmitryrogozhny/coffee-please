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
    public render() {
        const { title, description, imageUrl, address, openTime } = this.props;

        return (
            <div className="listItem">
                <div className="listItem-image">
                    <a onClick={this.props.onClick}>
                        <img className="image" src={imageUrl} alt="titlePhoto" />
                    </a>
                </div>
                <div className="listItem-content">
                    <a onClick={this.props.onClick}>
                        <div className="primaryText">{title}</div>
                    </a>
                    <div className="secondaryText">{description}</div>
                    <a onClick={this.props.onClick}>
                        <div className="optionalLink">{address}</div>
                    </a>
                    <div className="optionalText">{openTime}</div>
                </div>
            </div>
        );
    }
}
