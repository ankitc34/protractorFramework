export class log4jsconfig{

    static log():any {
        var log4js = require('log4js');
        log4js.configure('./src/config/log4js.json');

        let log = log4js.getLogger("default");
        return log;
    }
}