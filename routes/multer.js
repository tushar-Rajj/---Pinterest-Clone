const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require("path");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images/uploads');
    },
    filename: function(req, file, cb) {
        const uniqueName = uuidv4(); // Fix typo: it should be uuidv4 instead of unidv4
        cb(null, uniqueName + path.extname(file.originalname)); // Fix typo: it should be uniqueName instead of uniquename
    }
});

const uploads = multer({ storage: storage });

module.exports = uploads;
