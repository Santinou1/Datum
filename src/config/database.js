const mongoose = require("mongoose")

const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb+srv://santino:123456san@datum.wdkkypf.mongodb.net/?retryWrites=true&w=majority&appName=Datum")
        console.log("MongoDB conectado exitosamente")
    } catch(error){
        console.error("Error al conectar a MongoDB: " , error)
    }
}
module.exports  = connectDB