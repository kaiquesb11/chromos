self.onmessage = function (event) {
    console.log ("Worker recebeu:", event.data);


    switch(event.data){
        case "FAVOOR":{
            self.postMessage("Sim, posso fazer um favor");
            break;
        }

        case "FALA_OI":{
            self.postMessage("Ok, oieee");
            break;
        }

        case "FECHAR":{
            self.postMessage("Vou fechar, você que manda chefia!!!");
            self.close();
            break;
        }
        default:
            self.postMessage("Não entendi ALOKA")
    }
};