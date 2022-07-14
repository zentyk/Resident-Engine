import {ItemCategory} from "./Categories";

export interface IITem<T> {
    id : number;
    name : string;
    maxStack : number;
    quantity : number;
    canCombine : boolean;
    description : string;
    image : string;
    category : ItemCategory;
    canTransfer : boolean;
    canDiscard : boolean;
    price? : number;

    /** Shows a prompt if the user will equip the item
     * Requires a prompt Yes/No/Use
     * If inventory is full the item cannot be equipped or used **/
    EquipPrompt(inventory : number) : boolean;

    /** When the user equips the item
     * this must be assigned to an inventory.
     * Also is used to store items in vault or leaved **/
    AssignInventory(inventory : number) : boolean;

    /**An item that can be used cannot be equipped **/
    Use() : void;

    /** Returns item description **/
    Examine() : void ;

    /** Assigns inventory id to another player's inventory.
     * The Item must have marked as canTransfer **/
    Transfer(quantity : number, inventoryId : number) : boolean;

    /** Combines items and create a new one of different kind.
     * Item must be marked as canCombine = true **/
    Combine(item : T) : boolean

    /** Leaves the item in a position in the map
     * Item must be marked as canDiscard = true **/
    Drop(position : any) : boolean;

    /** Deletes item, won't be available **/
    Destroy() :void;
}