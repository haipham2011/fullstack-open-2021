const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// Checking build folder
app.use(express.static('build'))

// Cors handling
app.use(cors())

// Create custom morgan token
morgan.token('body', (req, _) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
];

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (_, response) => {
    const requestTime = new Date()
    response.send(`
    <div>
        Phonebook has info for ${persons.length} people
    </div>
    <br/>
    <div>
        ${requestTime}
    </div>
    `)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.json(persons)
  response.status(204).end()
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', express.json(), (request, response) => {
  const { name, number } = request.body

  if (!name || !number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }

  if (persons.find(person => person.name === name)){
    return response.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const newPerson = {
    name,
    number,
    id: generateId(),
  }

  persons = persons.concat(newPerson)

  response.json(newPerson)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
