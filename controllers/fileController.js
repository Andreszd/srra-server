exports.fileUpload = (req, res) => {

    console.log(req.files)
    if (req.files === null) return res.status(400).json({ message: 'no file uploaded' })

    const file = req.files.file
    const path = '/home/joseandres/projects/api/todolistAPI/public'
    file.mv(`${path}/${file.name}`, err => {
        if (err) {
            console.log(err)
            return res.status(500).json({ message: 'file not uploaded' })
        }
        res.status(200).json({
            message: 'file upload', file: req.body
        })
    })
}
