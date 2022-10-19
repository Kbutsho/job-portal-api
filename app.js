const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.route');
const jobRouter = require('./routes/job.route');
const managerRouter = require('./routes/hiringManager.route');
const adminRouter = require('./routes/admin.route');
require("dotenv").config();

const app = express();
//middleware
app.use(cors());
app.use(express.json());

//route
app.use("/api/user", userRouter)
app.use("/api/jobs", jobRouter)
app.use("/api/manager", managerRouter)
app.use("/api/admin", adminRouter)

app.get('/api/', (req, res) => {
    res.json({
        'status': 200,
        'message': 'index api'
    });
});
app.all('*', (req, res) => {
    res.json({
        'status': 400,
        'message': 'api not found',
    });
});

module.exports = app;