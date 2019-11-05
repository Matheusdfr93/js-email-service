let nodemailer = require('nodemailer');
let message = 'Acho que isso funcionou mesmo ein!?'


console.log(message)

let remetente = nodemailer.createTransport ({
host:'smtp.gmail.com',
service:'',
port:'465',
secure: true,
auth:{
    user:'matheusdfr93@gmail.com',
    pass:'oggzwrurugxsbhph'
}

});

let emailAserEnviado = {
    from:'matheusdfr93@gmail.com',
    to:'matheus.rodrigues@netpartners.com.br',
    subject:'Teste com node',
    requireTLS: true,
    text:message
};

remetente.sendMail(emailAserEnviado, function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Sucesso')
    }
})