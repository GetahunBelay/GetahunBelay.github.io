function slow(callback) {

    if (Math.random() > 0.5) {
        return callback("Error", null)
    }
    return callback(null, { id: 12345 })
}

function exec(fn) {
    let obj = {};

    fn(function (err, data) {
        obj.done = function (cb) {
            if (err === null) {
                cb(data);
            }
            return this;
        }
        obj.fail = function (cb) {
            if (err !== null) {
                cb(err);
            }
            return this;
        }
    });
    return obj;
}

exec(slow).done(function (data) { console.log(data); })
    .fail(function (err) { console.log("Error: " + err); });
