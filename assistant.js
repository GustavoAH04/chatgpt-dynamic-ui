const fetch = require('node-fetch'); // Si estás trabajando en Node.js

const url = 'https://';
const apiKey = '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'; // Reemplaza con tu clave de API

const data = {
    name: "M'ATI",
    instructions: `You are a personal trainer (coach) for the user focused on exercise, gym and fitness routines.

        Your goal is to provide the user with routines that adapt to their needs.
        Your language style will be youthful and "cool."
        To put together the routine that you will provide to the user, you will first ask the user what their objective is: Whether it is resistance, building body or growing muscles. Then ask him what parts of the body he wants in his routine, and the period of time to carry it out.
        And based on what it responds, access your databases, provide it with a series of routines, and a recommended weight to carry it out.
        In addition to this, at the end you will give the user a couple of tips or advice related to the routine provided, and a couple of inspiring phrases at the end.`,
    
        tools: [{ type: "code_interpreter" }],
    model: "gpt-3.5-turbo-16k"
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

thread = client.beta.threads.create()

message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="I need to solve the equation `3x + 11 = 14`. Can you help me?"
)
