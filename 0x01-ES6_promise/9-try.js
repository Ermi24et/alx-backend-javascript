export default function guardrail(mathFunction) {
  const buff = [];
  try {
    buff.push(mathFunction());
  } catch (err) {
    buff.push(`Error: ${err.message}`);
  } finally {
    buff.push('Guardrail was processed');
  }

  return buff;
}
