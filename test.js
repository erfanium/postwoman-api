const pwDoc = require("./index")


// r 
pwDoc({
   name: "Ragham-API-v3.0.0-test",
   folders: [
      {
         name: "Public",
         requests: [
            {
               url: "http://localhost:3000",
               path: "/code",
               method: "POST",
               auth: "None",
               httpUser: "",
               httpPassword: "",
               passwordFieldType: "password",
               bearerToken: "",
               headers: [],
               params: [],
               bodyParams: [],
               rawParams: '{\n    "phone": "+989174071235"\n}',
               rawInput: true,
               contentType: "application/json",
               requestType: "",
               name: "Request OTP Code",
               collection: 0
            }
         ]
      }
   ],
   requests: []
})
