export interface Store {
    id: number;
    name: string;
    type: string;
    price: string;
    currency: string;
}

export const store: Store[] = [
    {
        id: 1,
        name: "Sekiro",
        type: "PFP",
        price: "5",
        currency: "Diamond"
    },
    {
        id: 2,
        name: "HollowKnight",
        type: "PFP",
        price: "90",
        currency: "Diamond"

    },
    {
        id: 3,
        name: "Gengar",
        type: "PFP",
        price: "10",
        currency: "Diamond"

    },

];