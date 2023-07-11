// const { connect } = require("mongoose");
// require("dotenv").config();

// const connectMongo = async () => {
//   try {
//     const connectDB = await connect(process.env.MONGODB_URI);
//     console.log(`Connected to MongoDb, ${connectDB}`);
//   } catch (error) {
//     console.error(error);
//   }
// };

// module.exports = { connectMongo };
// const serverFireUP = async () => {
//     try {
//       await connectMongo();
//       app.listen(PORT, () =>
//         console.log(`server is live on http://localhost:${PORT}`)
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   serverFireUP();
