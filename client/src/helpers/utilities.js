export async function validate(fields, schema) {
  let errors = {};

  try {
    await schema.chain.validate(fields);
  } catch (err) {
    console.log(err.message);
    errors.common = schema.errMessage;
  } finally {
    return {
      submit: !Object.keys(errors).length,
      messages: errors,
    };
  }
}

export function dateParser(date) {
  const obj = new Date(date);

  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return obj.toLocaleDateString(undefined, options).toUpperCase();
}
