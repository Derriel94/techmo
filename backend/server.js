const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const database = {
	ProjectsArray: [
		{
			id: '0',
			projectName: 'GhostCodeSite',
			projectUrl: 'localhost:3000'
		},
		{
			id: '1',
			projectName: 'Smart_brain',
			projectUrl: 'localhost:3000'
		}
	]
}

app.get('/', (req, res)=> {
	console.log('/home')
	console.log('testing enviromdddddent')

})


app.get('/projects', (req, res) => {
	console.log('/projects')
	res.send(database.ProjectsArray);
})



app.listen(3001, ()=> {
	console.log("appp is here")
})