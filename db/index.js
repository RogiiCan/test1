const db = require('../connector')

const persons = () => {
    db.query('select * from person'(error, results, feild))
    if(error)
        return error;
        return results[0].solution;
})

object.defineProperty(exports, 'person', {
        get: () => person
})
