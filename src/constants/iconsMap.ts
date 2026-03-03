export const ICON_NAMES = [
  'back',
  'clock',
  'info',
  'leftArr',
  'rightArr',
  'download',
  'share',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
