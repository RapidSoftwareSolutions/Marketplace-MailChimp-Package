module.exports.echoBadEnd = (r, to, res) => {
    r.contextWrites[to] = `Error: Fill in required fields to use the ${PACKAGE_NAME}.`;
    r.callback = 'error';

    res.status(200).send(r);
}
module.exports.generateUUID = () => {
    var d = new Date().getTime();

    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    
    return uuid;
};

module.exports.clearArgs = (obj) => {
    for (var key in obj) {
        if(obj[key] == '' || obj[key] == '{}')
            delete obj[key];
    }

    return obj;
}