function base64Encode(str) {
    return Buffer.from(str).toString('base64')
}

function base64Decode(str) {
    return Buffer.from(str, 'base64').toString('ascii')
}

module.exports = {
    base64Decode,
    base64Encode
}