export const STORAGE_KEYS = [
  'is_onboarding_completed',
  'opened_buildings',
  'collected_skins',
  'bricks_count',
] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
