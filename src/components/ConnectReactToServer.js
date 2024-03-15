// only Reading purpose for connect Frontend To Backend.

// import { useState } from "react";

// export const Register = () => {
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const handleInput = (e) => {
//     console.log(e);
//     let name = e.target.name;
//     let value = e.target.value;

//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   // handle form on submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(user);

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/register", { //Backend Path api/auth..+../register
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });
//       console.log("response data : ", response);

//       if (response.ok) {
//         const responseData = await response.json();
//         alert("registration successful");
//         setUser({ username: "", email: "", phone: "", password: "" });
//         console.log(responseData);
//       } else {
//         console.log("error inside response ", "error");
//       }
//     } catch (error) {
//       console.error("Error", error);
//     }
//   };

//   return (
//     <>
//       <section>
//         <main>
//           <div className="section-registration">
//             <div className="container grid grid-two-cols">
//               <div className="registration-image reg-img">
//                 <img
//                   src="/images/register.png"
//                   alt="a nurse with a cute look"
//                   width="400"
//                   height="500"
//                 />
//               </div>
//               {/* our main registration code  */}
//               <div className="registration-form">
//                 <h1 className="main-heading mb-3">registration form</h1>
//                 <br />
//                 <form onSubmit={handleSubmit}>
//                   <div>
//                     <label htmlFor="username">username</label>
//                     <input
//                       type="text"
//                       name="username"
//                       value={user.username}
//                       onChange={handleInput}
//                       placeholder="username"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email">email</label>
//                     <input
//                       type="text"
//                       name="email"
//                       value={user.email}
//                       onChange={handleInput}
//                       placeholder="email"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="phone">phone</label>
//                     <input
//                       type="number"
//                       name="phone"
//                       value={user.phone}
//                       onChange={handleInput}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="password">password</label>
//                     <input
//                       type="password"
//                       name="password"
//                       value={user.password}
//                       onChange={handleInput}
//                       placeholder="password"
//                     />
//                   </div>
//                   <br />
//                   <button type="submit" className="btn btn-submit">
//                     Register Now
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };

// Here is the cors issue which we need to solve in our backend main server.js file

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./utils/db");
// const authRoutes = require("./routes/auth-route");
// const contactRoute = require("./routes/contact-route");
// const serviceRoute = require("./routes/service-route");
// const errorMiddleware = require("./middlewares/error-middleware");

// // const bcrypt = require("bcryptjs");
// const PORT = 5001;
// connectDB();

// const app = express();

// const corsOptions = {  // Required Line 143 to 149 and 130. Connected time F-to-B.
//   origin: "http://localhost:5175",
//   methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//   credentials: true,
// };

// app.use(cors(corsOptions));
// // to get the json data in express app.
// app.use(express.json());
