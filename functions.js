exports.successr = function succes(result){
    return {
        status: 'succes',
        resusult: result
    }
}

exports.error = function error(message) {
    return {
        status: 'error',
        message: message
    }
}