const REGEXP = {
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
}

export function validate (value = '', regexp = 'email') {
    return !!value.match(REGEXP[regexp])
}