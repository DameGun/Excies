export async function validate(fields, schema) {
    let errors = {};

    try {
        await schema.chain.validate(fields);
    }
    catch (err) {
        console.log(err.message);
        errors.common = schema.errMessage;
    }
    finally {
        return {
            submit: !Object.keys(errors).length,
            messages: errors
        };
    }    
}

export function convertTimeObjToString(last_time_edited) {
    if (last_time_edited?.years) {
        return `${last_time_edited.years}yr ago`;
    }
    if (last_time_edited?.months) {
        return `${last_time_edited.months}mo ago`
    }
    if (last_time_edited?.days) {
        return `${last_time_edited.days}d ago`
    }
    else {
        return ' ';
    }
}