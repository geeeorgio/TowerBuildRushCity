export const formatSecondsToTime = (totalSeconds: number): string => {
  const mins = Math.floor(totalSeconds / 60);
  const secs = Math.floor(totalSeconds % 60);

  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const formatMsToTime = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);

  return formatSecondsToTime(seconds);
};
