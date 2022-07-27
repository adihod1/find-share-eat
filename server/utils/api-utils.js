function errWrapper(handler, next) {
    handler().catch(next)
}

module.exports = {
    errWrapper
}