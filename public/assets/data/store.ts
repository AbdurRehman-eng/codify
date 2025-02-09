export interface Store {
    id: number;
    name: string;
    type: string;
    number: string;
    price: string;
    currency: string;
}

export const store: Store[] = [
    {
        id: 1,
        name: "Sekiro",
        type: "Pfp",
        number: "1",
        price: "5",
        currency: "Diamond"
    },
    {
        id: 2,
        name: "HollowKnight",
        type: "Pfp",
        number: "2",
        price: "90",
        currency: "Diamond"

    },
    {
        id: 3,
        name: "Gengar",
        type: "Pfp",
        number: "3",
        price: "10",
        currency: "Diamond"

    },
    {
        id: 4,
        name: "Terrorance",
        type: "Background",
        number: "1",
        price: "20",
        currency: "Diamond"

    },
    {
        id: 5,
        name: "Shadow Warrior",
        type: "Background",
        number: "2",
        price: "18",
        currency: "Diamond"

    },


];