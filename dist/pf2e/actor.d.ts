declare const ACTOR_TYPES: readonly ["army", "character", "familiar", "hazard", "loot", "npc", "party", "vehicle"];
declare const SAVE_TYPES: readonly ["fortitude", "reflex", "will"];
declare const SKILL_SLUGS: Set<"crafting" | "acrobatics" | "arcana" | "athletics" | "deception" | "diplomacy" | "intimidation" | "medicine" | "nature" | "occultism" | "performance" | "religion" | "society" | "stealth" | "survival" | "thievery">;
/**
 * Reset and rerender a provided list of actors. Omit argument to reset all world and synthetic actors
 * @param [actors] A list of actors to refresh: if none are provided, all world and synthetic actors are retrieved
 * @param [options] Render options for actor sheets and tokens
 * @param [options.sheets=true] Render actor sheets
 * @param [options.tokens=false] Redraw tokens
 */
declare function resetActors(actors?: Iterable<ActorPF2e>, options?: ResetActorsRenderOptions): Promise<void>;
export { ACTOR_TYPES, SAVE_TYPES, SKILL_SLUGS, resetActors };
