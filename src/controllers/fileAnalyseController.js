const fileAnalyse = (req, res) => {
    const file = req.file
    console.log(file)
    if (file) {
        res.json({
            'name': file.originalname,
            'size': file.size,
            'type': file.mimetype
        })
    } else {
        res.status(422).json({ "upfile": "upfile is required and must be a file" })
    }
}

module.exports = {
    fileAnalyse
}