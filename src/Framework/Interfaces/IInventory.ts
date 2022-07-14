import {IITem} from "./IITem";

export interface IInventory {
    id: number;
    maxStack: number;
    stack : IITem<any>[] ;
    available : boolean;

    AssignInventory(playerId : number): boolean;

    SetAvailable(available : boolean): void;
}