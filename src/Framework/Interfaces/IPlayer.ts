import {IInventory} from "./IInventory";
import {IState} from "./IState";
import {IITem} from "./IITem";

export interface IPlayer{
    id: number;
    name: string;
    inventory: IInventory;
    position: any;
    rotation: any;
    health: number;
    maxHealth: number;
    available: boolean;
    controls: any;
    state: IState;
    model: any;
    canAttack: boolean;
    canMove: boolean;
    partnering: boolean;
    partnerState: IState;
    weapon: IITem<any>; //ONLY WEAPON, can be null

    Move(direction: any): void;

    Rotate(direction: any): void;

    Damage(damage: number): void;

    SetState(state: IState): void;

    Heal(): void;

    Die(): void;

    SetAvailable(available: boolean): void;
}