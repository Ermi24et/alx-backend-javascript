import { RowID, RowElement } from "./interface";

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updatedRow(rowId: RowID, row: RowElement): RowID;