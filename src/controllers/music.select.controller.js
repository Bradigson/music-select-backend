const {sendEmail} = require("../services/music.select.aws.ses");

class MusicSelectController
{
    async SendMusiclistToEmail(req, res)
    {
        try 
        {
            let listMusic = req.body;
            let response = await sendEmail("bradigson@gmail.com", "Samuel", listMusic);
            return res
            .status(200)
            .send({
                code:200,
                message:"Email Sent!",
                response
            })

        } catch (err) 
        {
            return res.status(500).send({
                code:500,
                message : err
            })
            
        }
    }

}

module.exports = new MusicSelectController();