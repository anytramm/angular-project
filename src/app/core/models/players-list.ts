import { Player } from "./player";

export interface PlayersList {
	data: Array<Player>,
	meta: {
		total_pages: number,
		current_page: number,
		next_page: number,
		per_page: number,
		total_count: number
	}
}