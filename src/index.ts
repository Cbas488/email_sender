import express, { Request, Response } from 'express'
import cors from 'cors'

const PORT = 8888
const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: '*'
}))

app.get('/', (req: Request, res: Response) => {
    res.send('INFO :: Root route called')
})

app.listen(PORT, () => {
    console.log('INFO :: Webserver started on port ' + PORT);  
})