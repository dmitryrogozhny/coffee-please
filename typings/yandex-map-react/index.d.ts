// declare module "yandex-map-react" {

//     import * as React from "react";

//     // Map component, props, and state
//     export interface IMapProps {
//         apiKey?: string;
//         onAPIAvailable?: Function;
//         width?: string | number;
//         height?: string | number;
//         zoom?: number;
//         state?: Object,
//         coordorder?: "latlong" | "longlat";
//         options?: Object;
//         bounds?: Array<Object>;
//         center?: [number, number];
//         style?: Object;
//     }

//     export interface IMapState {
//         isAPILoaded?: boolean;
//     }

//     export class Map extends React.Component<IMapProps, IMapState> {
//     }

//     // Marker component, props, and state
//     export interface IMarkerProps {
//         lat: number;
//         lon: number;
//         properties?: Object;
//         options?: Object;
//         balloonState?: "opened" | "closed";
//     }

//     export interface IMarkerState {
//     }

//     export class Marker extends React.Component<IMarkerProps, IMarkerState> {        
//     }

//     // MarkerLayout component, props, and state
//     export interface IMarkerLayoutProps {
//         marker?: Object;
//     }

//     export interface IMarkerLayoutState {
//     }

//     export class MarkerLayout extends React.Component<IMarkerLayoutProps, IMarkerLayoutState> {
//     }

//     // BalloonLayout component, props, and state
//     export interface IBalloonLayoutProps {
//     }

//     export interface IBalloonLayoutState {
//     }

//     export class BalloonLayout extends React.Component<IBalloonLayoutProps, IBalloonLayoutState> {
//     }

//     // ConstructorJSONImport component, props, and state
//     export interface IConstructorJSONImportProps {
//         userMapData: Object;
//     }

//     export interface IConstructorJSONImportState {
//     }

//     export class ConstructorJSONImport extends React.Component<IConstructorJSONImportProps, IConstructorJSONImportState> {        
//     }
// }