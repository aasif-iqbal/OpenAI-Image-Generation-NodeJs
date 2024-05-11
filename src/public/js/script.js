
let generate_image = document.getElementById('generate_image');    

    generate_image.addEventListener('click', async () => {
        // Get the input field element
        const textInput = document.getElementById("prompt");
       
        // Get the value (text) from the input field
        const prompt = textInput.value;
        alert(prompt);
        
        const jsonData = JSON.stringify(data);

        console.log(jsonData);

        await fetch('http://localhost:3001/image/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
            .then(response => {
                if (!response.ok) {
                    alert('not json',response);
                    throw new Error(`Error: ${response.status}`);
                }
                // Check if the response body is empty
                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    // If the response is not JSON, handle it accordingly
                    throw new Error('Response is not in JSON format');
                }
                // Parse the JSON response  
                //set Generated Image
                alert('3',response.image_url)
                document.getElementById('prompt_img').innerHTML = response.image_url;      
                // return response.json();
            })
            .then(responseData => {
                alert('ssss',image_url);
                console.log('Data sent successfully:', responseData);
            })
            .catch(error => {
                alert('err',error);
                console.error('Error:', error);
            });
    });