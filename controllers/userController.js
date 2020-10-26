exports.userAuthenticate = (req, res)=>{
    res.json({
        id: req.user
    })
}
