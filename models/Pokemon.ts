import { ChiselEntity } from "@chiselstrike/api";
export class Pokemon extends ChiselEntity {
    name: string;
    generation: number;
    rarity: number = 1;
    isShiny: boolean = false;
    evolution?: string;
    type: string;
}
