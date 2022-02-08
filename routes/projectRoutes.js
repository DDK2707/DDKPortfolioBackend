const express = require('express')
const app = express.Router()
const fixArrayID = require('../helpers')
 

let projects = [
        {id: 1,
        title: "First Portfolio",  
        github: "https://github.com/DDK2707/ProjectWeek", 
        netlify: "https://ddkportfolio.netlify.app/", 
        image: "../../assets/Projects/firstportfolio.png"
        },
        {id: 2,
        title: "Point of Sale",
        github: "https://github.com/DDK2707/POSJavaScriptFinal", 
        netlify: "https://ddkpointofsalefinal.netlify.app/", 
        image: "../../assets/Projects/jspointofsale.png"
        },
        {id: 3,
        title: "First Full Site",
        github: "https://github.com/DDK2707/PortfolioWeek4", 
        netlify: "https://ddkfirstfullsite.netlify.app/", 
        image: "../../assets/Projects/firstfullsite.png" 
        },
        {id: 4,
        title: "JavaScript Calculator",
        github: "https://github.com/DDK2707/JSCalculator", 
        netlify: "https://ddk-calculator.netlify.app/", 
        image: "../../assets/Projects/jscalculator.png"
        },
        {id: 5,
        title: "Reaction Timer",
        github: "https://github.com/DDK2707/ReactionTimer", 
        netlify: "https://ddkreactiontimer.netlify.app/", 
        image: "../../assets/Projects/vuereactiontimer.png"
        },
        {id: 6,
        title: "Bootstrap E-Commerce Site",
        github: "https://github.com/DDK2707/BootstrapIntro", 
        netlify: "https://ddkbootstrapecommerce.netlify.app/", 
        image: "../../assets/Projects/Bootstrapintostore.png"
        }
]

app.get('/', (req, res) => {
    res.send(projects)
});

app.get('./:id', (req, res) =>{
    const project = projects.find(projects => project.id == req.params.id);
    if (!project) res.status(404).send({msg: "Input valid project title"});
    res.send(project)
})
//create proje;ct
app.post("/", (req, res) =>{
    let { title, github, netlify, image} = request.body;
    if (!title||!github||!netlify||!image) run.status(400).send({msg: "Please fill out all required fields"});
    let newProject = {
        id: projects.length + 1,
        github,
        netlify,
        image
    }
    projects.push(newProject);
    res.send(newProject);
});




//update project
app.put("/:id", (req, res) => {
let project = projects.findIndex((project) => project.id == req.params.id);
if (!project) res.status(400).send({msg: "Project is not found"});

let { title, github, netlify, image} = req.body;

if (title) project.title = title;
if (github) project.github = github;
if (netlify) project.netlify = netlify;
if (image) project.image = image
})

//delete project
app.delete('/:id', (req, res) => {
    projects = projects.filter((project) => project.id != req.params.id);
    fixArrayId(projects);
    res.send({ msg: 'Item removed' });
});
module.exports = app
