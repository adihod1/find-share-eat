const processFile = require("../middleware/upload");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");
// Instantiate a storage client with credentials
const storage = new Storage({ keyFilename: "google-cloud-key.json" });
const bucket = storage.bucket("findshareeat");


const upload = async (req, res) => {
    try {
        await processFile(req, res);
        if (!req.file) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        // Create a new blob in the bucket and upload the file data.

        const fileName = (Math.random() + 1).toString(36).substring(7) + req.file.originalname
        const blob = bucket.file(fileName);
        const blobStream = blob.createWriteStream({
            resumable: false,
        });
        blobStream.on("error", (err) => {
            res.status(500).send({ message: err.message });
        });
        blobStream.on("finish", async (data) => {
            // Create URL for directly file access via HTTP.
            const publicUrl = format(
                `https://storage.googleapis.com/${bucket.fileName}/${blob.name}`
            );
            res.status(200).send({
                message: "Uploaded the file successfully: " + fileName,
                url: publicUrl,
            });
        });
        blobStream.end(req.file.buffer);
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${name}. ${err}`,
        });
    }
};
module.exports = upload