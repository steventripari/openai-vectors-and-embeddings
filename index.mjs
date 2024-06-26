// OpenAI URL and Headers
import fetch from 'node-fetch';

// esm-config.js
import dotenv from 'dotenv';
dotenv.config();

// expand the JSON [array]
import util from 'util';

const openAiHeaders = {
    'Content-Type': 'application/json',
    //'Authorization': 'Bearer "your-api-key"'
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
};



async function createEmbedding(textToEmbed) {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: openAiHeaders,
        body: JSON.stringify({
            'model': 'text-embedding-ada-002',
            'input': textToEmbed
        }),
    });

    if (response.ok) {
        const data = await response.json();
        //console.log(data);
        console.log(util.inspect(createEmbedding, { showHidden: false, depth: null, colors: true }));
       
        return data;
    } else {
        console.error('Error creating embedding:', response.statusText);
    }
}


createEmbedding("Hello world")
console.dir(createEmbedding, {depth:null});