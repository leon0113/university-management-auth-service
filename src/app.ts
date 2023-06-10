import express, { Application, Response, Request } from 'express'
// import usersService from './app/modules/users/users.service';
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// applications routes
// console.log(app.get('env'));
app.use('/api/v1/users/', usersRouter)

// testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working succesfully')
})

export default app
