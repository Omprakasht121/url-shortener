import express from 'express';
import { userRoutes } from './src/api/v1/routes/user-routes.js';
import { error404 } from './src/utils/middleware/404.js';
import { connectToDB } from './src/utils/db/connection.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { urlRoutes } from './src/api/v1/routes/url-routes.js';

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use('/',userRoutes);
app.use('/', urlRoutes);
app.use(error404);

const promise = connectToDB();
promise.then(result => {
    console.log('DatabaseConnection Successfully');
    const server = app.listen(5000,err => {
    if(err){
        console.log('server crashed', err)
    }
    else{
        console.log('server is up and running ',server.address().port);
    }
})
}).catch(err => {
    console.log('error while connecting to db', err);
})













// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import { userRoutes } from './src/api/v1/routes/user-routes.js';
// import { urlRoutes } from './src/api/v1/routes/url-routes.js';
// import { error404 } from './src/utils/middleware/404.js';
// import { connectToDB } from './src/utils/db/connection.js';

// dotenv.config();

// const app = express();

// // ✅ Enable CORS properly for frontend
// app.use(cors({
//   origin: process.env.FRONTEND_URL || '*', // e.g., https://your-frontend.vercel.app
//   credentials: true,
// }));

// app.use(express.json());

// // ✅ Use routes
// app.use('/api/users', userRoutes);
// app.use('/api/urls', urlRoutes);

// // ✅ 404 Middleware
// app.use(error404);

// // ✅ Connect to DB and start server only after connection success
// const startServer = async () => {
//   try {
//     await connectToDB();
//     console.log('✅ Database connected successfully');

//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`🚀 Server is running on port ${PORT}`);
//     });
//   } catch (err) {
//     console.error('❌ Error connecting to DB:', err);
//     process.exit(1);
//   }
// };

// startServer();
