/* eslint-disable no-console */
// eslint-disable-next-line no-undef
var db = new PouchDB("food");

db.allDocs({
    include_docs: true,
    attachments: true
}).then(function (result) {
    var docs = result.rows.map(function (row) {
        return row.doc;
    });
    for (let i of docs) {
        console.log(i.name);
        console.log(i.kalorien);
        console.log(i.image_url);
    }
}).catch(function (err) {
    console.log(err);
});