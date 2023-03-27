import express from 'express';



const app = express();

const PORT=8000;


// listen func takes two agruments aas input
// first:port no
// second: call back function
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));