import OpenAI from "openai";

const generateImage = async function(req, res){
    try {
        console.log('here');
        res.status(200).json({'ok':'200'})
    } catch (error) {
        console.log('err',error);
    }
}

export {generateImage};

