export const generateMockStreakData = (year = 2025) => {
  const start = new Date(year, 0, 1); // Jan 1, year
  const end = new Date(year, 11, 31); // Dec 31, year

  const data = [];

  const totalDays =
    Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  const countLow = Math.floor(totalDays * 0.5); // 50%
  const countMid = Math.floor(totalDays * 0.3); // 30%
  const countHigh = totalDays - countLow - countMid; // 20%

  const intensities: number[] = [];

  // 50% <= 40
  for (let i = 0; i < countLow; i++) {
    intensities.push(Math.floor(Math.random() * 41)); // 0 - 40
  }

  // 30% > 40 && <= 80
  for (let i = 0; i < countMid; i++) {
    intensities.push(Math.floor(Math.random() * 40) + 41); // 41 - 80
  }

  // 20% > 80 && <= 100
  for (let i = 0; i < countHigh; i++) {
    intensities.push(Math.floor(Math.random() * 20) + 81); // 81 - 100
  }

  // Shuffle intensities
  for (let i = intensities.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [intensities[i], intensities[j]] = [intensities[j], intensities[i]];
  }

  const currentDate = new Date(start);

  for (let i = 0; i < totalDays; i++) {
    data.push({
      date: currentDate.toISOString().split("T")[0],
      intensity: intensities[i],
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};
