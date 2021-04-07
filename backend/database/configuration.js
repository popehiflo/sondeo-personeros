const mongoose = require('mongoose');

const dbConnection = async () => {

    //user: personero_user
    //pass: 9IO0asG4XWg77Eff
    //conn: mongodb+srv://personero_user:9IO0asG4XWg77Eff@cluster0.6by7g.mongodb.net/personerodb
    
    try {
        await mongoose.connect(
            'mongodb+srv://personero_user:9IO0asG4XWg77Eff@cluster0.6by7g.mongodb.net/personerodb', 
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true
            }
        );

        console.log('Base de Datos "personerodb" Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD, ver logs');
    }


}

module.exports = {
    dbConnection
}