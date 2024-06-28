const {ServiceApi} = require( './service');
const express = require('express');
const app = express();
const xsenv = require('@sap/xsenv');
const fs = require('fs');

const base64 = require('base64topdf');

xsenv.loadEnv();
const services = xsenv.getServices({
    uaa: { label: 'xsuaa' }
});

const xssec = require('@sap/xssec');
const passport = require('passport');
passport.use('JWT', new xssec.JWTStrategy(services.uaa));
app.use(passport.initialize());
app.use(passport.authenticate('JWT', {
    session: false
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/srv', function (req, res) {
    if (req.authInfo.checkScope('$XSAPPNAME.User')) {
        res.status(200).send('adsUnify');
    } else {
        res.status(403).send('Forbidden');
    }
});

app.post('/srv/pdfplatform', function (req, res) {
    ServiceApi.render(req.body.render).then( pdf=>{
 if(req.body.sign){
    req.body.sign.pdf = pdf;
    ServiceApi.sign(req.body.sign).then(spdf=>{
        base64.base64Decode(spdf,'render.pdf');
        const content = fs.readFileSync('render.pdf');
      

        if(req.body.email){ 
            ServiceApi.semail(content,req.body.email.attachname,req.body.email.sendto,req.body.email.subject,req.body.email.ebody).then((info=>{
                console.log('email sent successfully');
            })).catch(err=>{console.log(err)});
                 };   

        if(req.body.cmis){
            const blob = new Blob([content], {type: 'application/pdf'});          
            ServiceApi.createDoc(blob,req.body.cmis.name,req.body.cmis.path).then(cmisresp=>{
                console.log(cmisresp.succinctProperties);
            }).catch(err=>{
                console.log(err);
            });
            delete blob;
                        };


        if(req.body.print){         
            // fs.close();
            ServiceApi.print(content, req.body.print).then(result=>{
                console.log('uploaded into print queue  ' + req.body.print.qname)
            }).catch(err=>{
                console.log(err);
            });
        };

            let raw =  fs.createReadStream('render.pdf');
            res.writeHead(200, 'ok');
            raw.pipe(res);
            fs.rm('render.pdf',()=>{
                console.log('file deleted successfully');
            });
            delete raw;
            delete content;
        
      
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    });
 }else{
        base64.base64Decode(pdf,'render.pdf');
        const content = fs.readFileSync('render.pdf');

        if(req.body.print){         
            ServiceApi.print(content, req.body.print).then(result=>{
                console.log('uploaded into print queue  ' + req.body.print.qname)
            }).catch(err=>{
                console.log(err);
            });
        }
    
        if(req.body.cmis){
           
            const blob = new Blob([content], {type: 'application/pdf'});
            ServiceApi.createDoc(blob,req.body.cmis.name,req.body.cmis.path).then(cmisresp=>{
                console.log(cmisresp.succinctProperties);
            }).catch(err=>{
                console.log(err);
            })
                        };
        if(req.body.email){ 
            ServiceApi.semail(content,req.body.email.attachname,req.body.email.sendto,req.body.email.subject,req.body.email.ebody).then((info=>{
                console.log('email sent successfully');
            })).catch(err=>{console.log(err)});
                 };     
        let raw =  fs.createReadStream('render.pdf');
        res.writeHead(200, 'ok');
        raw.pipe(res);
        fs.rm('render.pdf',()=>{
            console.log('file deleted successfully');
        });
 }       
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    });
    
});

app.get('/srv/user', function (req, res) {
    if (req.authInfo.checkScope('$XSAPPNAME.User')) {
        res.status(200).json(req.user);
    } else {
        res.status(403).send('Forbidden');
    }
});
const port = process.env.PORT || 5001;
app.listen(port, function () {
    console.info('Listening on http://localhost:' + port);
});