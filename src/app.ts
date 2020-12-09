import express from "express"
import BodyParser from "body-parser"
import helmet from "helmet"
import cors from "cors"
import morgan from "morgan"

const app = express()


app.use(helmet())
app.use(cors())
app.use(BodyParser.json())
app.use(morgan("dev"))

app.get('/', (req, res) => {
    return res.status(200).send({
        message: "You have reached the API 🎉"
    })
})

export default app