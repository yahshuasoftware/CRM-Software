import express from 'express'; 
import cors from 'cors';
const app = express()
import authRouter from "./routes/auth.js"
import departmentRouter from "./routes/department.js"
import employeeRouter from "./routes/employee.js"
import salaryRouter from "./routes/salary.js"
import leaveRouter from './routes/leave.js'
import settingRouter from './routes/setting.js'
import 'dotenv/config'
import connectToDatabase from './config/database.js';

connectToDatabase()
app.use(cors())
app.use(express.json())
app.use(express.static('public/uploads'))
app.use('/api/auth',authRouter)
app.use('/api/department',departmentRouter)
app.use('/api/employee',employeeRouter)
app.use('/api/salary',salaryRouter)
app.use('/api/leave',leaveRouter)
app.use('/api/setting',settingRouter)


app.listen(
    process.env.PORT,
    ()=> console.log(`Backend is running on port:${process.env.PORT}`)
)