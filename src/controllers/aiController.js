import OpenAI from "openai";

const openai = new OpenAI({    
    apiKey: process.env.OPEN_AI_KEY,
  });

const generateImage = async function(req, res){

    const prompt = req.body.prompt;
    console.log('req-here',prompt);
    try{
      const response = await openai.images.generate({
          model:'dall-e-3',
          prompt:prompt,
          n:1,
          size:"1024x1024"
      });
      image_url = response.data.data[0].url;      
      console.log(image_url);
      res.send(image_url);
    }catch(err){
      console.log(err);
      res.send(err);
    }
}

export {generateImage};

