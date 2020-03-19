const open = require("open")
const app = require("express")()
const cors = require("cors")
const serveStatic = require("serve-static")

const serve = serveStatic("postwoman-static")

module.exports = function(collection, port = 4200) {
   app.use(
      cors({
         origin: [`http://localhost:${port}`, `http://127.0.0.1:${port}`]
      })
   )

   app.get("/doc", (req, res) => {
      res.status(200).json(collection)
   })

   app.get("*", (req, res) => serve(req, res))

   const url = `http://localhost:${port}/?import=http://localhost:${port}/doc`

   app.listen(port, () => {
      console.log(`\x1b[32m  Open ${url} for API doc!\x1b[0m`)
      open(url)
   })
}
