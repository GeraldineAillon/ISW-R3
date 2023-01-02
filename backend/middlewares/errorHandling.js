const fileErrors = (err, req, res,next) => {
    if (err) {
        if(err===1){
        console.log(err)
        return res.status(415).send({ message: "Solo se admiten images" })
        }return res.status(413).send({ message: "El archivo es demasiado grande" })
      
    }
}
module.exports = {
    fileErrors
}