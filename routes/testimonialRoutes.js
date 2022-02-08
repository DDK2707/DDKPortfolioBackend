const express = require('express')
const app = express.Router()

let testimonials = [
    {id:1, 
    name: "Alex Sexwale",
    designation:"Lecturer",
    quote: "Dale is creative and focused. He is goal drive, which will help him succeed in his life dreams",
    img: ""
    },
    {id:2, 
    name: "Yaasien Salaam",
    designation:"Colleague",
    quote: "Dale is a determined developer, always dedicated, and willing to adapt and learn new things, he also helps his colleagues when and where he can. If you're looking for a focused and perfectionist developer, Dale is the developer for you.",
    img: ""
    },
    {id:3, 
    name: "Amaarah January",
    designation:"Colleague",
    quote: "Dale is a confident, hard-working and intelligent person. He always finds ways to be unique and creative with whatever he works on. He is a natural born leader with the ability to also listen to the input of others.",
    img: ""
    },
    {id:4, 
    name: "Dalarno Van Rooi",
    designation:"Colleague",
    quote: "Dale, a being easily described as Dedicated, Kind, Hardworking. I can tell you for nothing at all that you've never seen somebody as unique as he, he will amaze you and change your understanding about what it is to be a friend as well as being a complete 'beast' in the work environment. His addition to any team will uplift the workspace undeniably.",
    img: ""
    },
    {id:5, 
    name: "Kyle McBryne",
    designation:"Colleague",
    quote: "Dale is a very solicitous person,caring about his peers while being hard-working and determined in the process.",
    img: ""
    },
    {id:6, 
    name: "Cameron Bowers",
    designation:"Colleague",
    quote: "Dale is determined and hardworking. He is a great web developer and produces high quality work. He is extremely inspiring and also really knowledgeable.",
    img: ""
    }
]

app.get('/', (req, res) => {
    res.send(testimonials)
});

app.get('./:id', (req, res) =>{
    const testimonial = testimonials.find(testimonials => testimonial.id == req.params.id);
    if (!testimonial) res.status(404).send({msg: "This person does not exist"});
    res.send(testimonial)
})

//create testimonial
app.post("/", (req, res) =>{
    let { name, designation, quote, img} = request.body;
    if (!name||!designation||!quote||!img) run.status(400).send({msg: "Please fill out all required fields"});
    let newTest = {
        id: testimonials.length + 1,
        name,
        desgination,
        quote, img
    }
    testimonials.push(newTest);
    res.send(newTest);
});




//update testimonial
app.put("/:id", (req, res) => {
let testimonial = testimonials.findIndex((testimonial) => testimonial.id == req.params.id);
if (!testimonial) res.status(400).send({msg: "Testimonial is not found"});

let { name, designation, quote, img} = req.body;

if (name) testimonial.name = name;
if (designation) testimonial.designation = designation;
if (quote) testimonial.quote = quote;
if (img) testimonial.img = img
})

//delete testimonial
app.delete('/:id', (req, res) => {
    testimonial = testimonials.filter((testimonial) => testimonial.id != req.params.id);
    fixArrayId(testimonials);
    res.send({ msg: 'Item removed' });
});
module.exports = app
