export const generateRandomPhone = () => {
  const ddds = [
    11, 21, 31, 41, 51, 61, 71, 81, 85, 62, 63, 65, 67, 68, 84, 83, 86, 87, 88,
    89, 82, 79, 75, 73, 77, 85, 95, 96, 97, 98, 99,
  ];
  const ddd = ddds[Math.floor(Math.random() * ddds.length)];
  const firstPart = 90000 + Math.floor(Math.random() * 10000);

  return `+55 ${ddd} ${firstPart}-****`;
};
