export interface Medicine {
    name: string;
    dispensations: Dispensation[];
}

export interface Dispensation {
    quantity: number;
    lote: number;
}