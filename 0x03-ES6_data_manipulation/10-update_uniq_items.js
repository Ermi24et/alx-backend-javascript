export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  const temp = map;
  for (const [key, val] of map.entries()) if (val === 1) temp.set(key, 100);
  return temp;
}
