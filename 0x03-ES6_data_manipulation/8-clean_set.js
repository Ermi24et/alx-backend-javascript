export default function cleanSet(set, startString) {
  let val = '';
  if (!startString || !startString.length) return val;
  for (const i of set) { if (i && i.startsWith(startString)) val += `${i.slice(startString.length)}-`; }
  return val.slice(0, val.length - 1);
}
