const aws = require("aws-sdk");
const {config} = require("dotenv");
config();
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

console.log("tt:" + process.env.AWS_ACCESS_KEY_ID);
console.log("tt:" + process.env.AWS_SECRET_ACCESS_KEY);
console.log("tt:" + process.env.AWS_REGION);
console.log("tt:" + process.env.AWS_EMAIL)
//stas son las crdenciales del IAM
const aws_configure = 
{
    accessKeyId : process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
}


const aws_config = new aws.SES(aws_configure);

const sendEmail = async(musics)=>
{
   
    //let data = musics

    const musicItems = musics.map(song => `<li>${song.song}</li>`).join('');
    const musicList = `
    <ol>
        ${musicItems}
    </ol>
`;



    let params = {
        Source : process.env.AWS_EMAIL,
        Destination:{
            ToAddresses:[
                process.env.AWS_EMAIL
            ]
        },
        ReplyToAddresses:[],
        Message:{
            Body:{
                Html:{
                    Charset:'UTF-8',
                    Data:`<h1>Lista de Canciones</h1><h3>${musicList}</h3>`
                },
                Text:{
                    Charset:'UTF-8',
                    Data:`Lista de musica`
                }
            },
            Subject:{
                Charset:'UTF-8',
                Data:`Canciones selecionadas`
            }
        }

    };


    try 
    {
        const res = await aws_config.sendEmail(params).promise();
        console.log('email has been sent!');
        return res;
        
    } catch (error) 
    {
        console.log(error);
        
    }
}

module.exports = {
    sendEmail
}