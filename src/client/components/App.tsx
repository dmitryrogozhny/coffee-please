import * as React from "react";
import "../css/App.scss";

import * as classnames from "classnames";
import * as superagent from "superagent";

import { Map, Marker, MarkerLayout } from "yandex-map-react";

import ListItem from "./ListItem";

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
    // menu: Array<MenuItem>;
}

const markerStyles = {
    width: "40px",
    height: "40px",
    overflow: "hidden",
    border: "1px solid orange",
    background: "#FFF",
    borderRadius: "50%"
};

const mapState = {
    controls: ["default"]
};

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { places: [], center: [53.90979383, 27.57662681] };
    }

    public readonly createClickHandler = (id: string) => {
        return (event: React.MouseEvent<HTMLElement>) => {
            const place = this.state.places.filter((value) => { return value.id === id })[0];
            this.setState({ center: [place.latitude, place.longitude], selectedPlace: place });
        }
    }

    public componentDidMount() {
        superagent.get("/api/v1/coffeePlaces", (error, result) => {
            console.log(error);
            console.log(result);

            const places = result.body as Array<CoffeePlace>;

            this.setState({ places: places });
            console.log(places);
            console.log(result.body);
        });
    }

    public render(): React.ReactElement<{}> {
        const places: Array<React.ReactElement<{}>> = this.state.places.map((place) => {
            return (
            <ListItem
                key={place.id}
                title={place.title}
                description={place.description}
                imageUrl={`./img/${place.imageUrl}`}
                address={place.address}
                openTime={place.timetable}
                onClick={this.createClickHandler(place.id)}
            />);
        });

        return (
            <div className="container floorPlanEditor">
                <div className="header">
                    <a href={window.location.href}>
                        <img src="./img/icon.png" alt="logo" className="icon" />
                    </a>
                    <span className="headerTitle">кофе хороший и десерты интересные</span>
                </div>
                <div className="content">
                    <div className="left-panel">
                        {places}
                    </div>
                    <div className="right-panel">
                        <div className="mapContainer">
                            <Map
                                onAPIAvailable={function () { console.log("API loaded"); }}
                                width={"100%"}

                                state={mapState}
                                center={this.state.center}
                                zoom={16}>
                                {this.state.places.map((place) => (
                                    <Marker key={"marker_" + place.id} lat={place.latitude} lon={place.longitude}>
                                        <MarkerLayout>
                                            <div>
                                                <i
                                                    className={classnames("ms-Icon", "ms-Icon--RadioBtnOn", "mapMarkIcon", {"marMarkIcon-active": this.state.selectedPlace && place.id === this.state.selectedPlace.id})}
                                                    aria-hidden="true"></i>
                                            </div>
                                        </MarkerLayout>
                                    </Marker>
                                ))}
                            </Map>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <h1 className="footerTitle">копирайты-шмопирайты, 2017</h1>
                </div>
            </div>
        );
    }
}