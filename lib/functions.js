module.exports.echoBadEnd = (r, to, res) => {
    r.contextWrites[to] = `Error: Fill in required fields to use the ${PACKAGE_NAME}.`;
    r.callback = 'error';

    res.status(200).send(r);
};

module.exports.generateUUID = () => {
    var d = new Date().getTime();

    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    
    return uuid;
};

module.exports.clearArgs = function fn(obj, recurse) {
    for (var i in obj) {
        if (obj[i] == undefined || obj[i] == '') {
            delete obj[i];
        } else if (recurse && typeof obj[i] === 'object') {
            if(JSON.stringify(obj[i]) == '{}') {
                delete obj[i];
            }

            fn(obj[i], true);
        }
    }

    return obj;
}

module.exports.array = (v) => {
    if(v) return v.split(", ");
    else return undefined;
}