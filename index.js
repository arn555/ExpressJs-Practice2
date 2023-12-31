var fs=require('fs');
var data=fs.readFileSync('chemistry.json');
var elements=JSON.parse(data);

const express = require('express');
const app = express();

app.use(express.json());

const port = 4000

app.listen(port, () => {
    console.log(`Node API app is running on port ${port}`)
  })

//   app.get('/users', (request, response) => {
//     response.send('Successful Request ...');
//   })

//   app.get('/', (request, response) => {
//     response.send('Welcome')
//   })


app.get('/elements',alldata);
function alldata(request,response)
{
    response.send(elements);
}
app.get('/elements/:element/',searchElement);
function searchElement(request,response)
{
	var word=request.params.element;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	// console.log(elements[word]);
	if(elements[word])
	{
		var reply=elements[word];
		
	}
	else
	{
		var reply={
			status:"Not Found"
		}
	}
    console.log(reply.boil);
	response.send(reply);

}
