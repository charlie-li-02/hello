const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'gmail',
    // service: 'smtp.gmail.com',
    // port: 2525,
    // secure: true,
    auth: {
        user: 'charlie.website.message@gmail.com',
        pass: ''
    }
});

module.exports = function(params) {
    this.from = 'charlie.website.message@gmail.com';
    this.to = 'charlie.zh.li.1025@gmail.com';

    this.send = function(){
        let options = {
            from : this.from,
            to : this.to,
            subject : params.subject,
            text : params.message
        };

        transporter.sendMail(options, function(err){
            if (err) {
                return console.log(err);
            } else {
                window.alert("Message sent!");
            }
        });
    }
}