const fs = require('fs');
const path = require("path");
const rootPath =  process.cwd();

module.exports = class Logger
{
    constructor(config, subdir = "")
    {
        this.PID = process.pid;
        this.config = config.LOG;
        this.rootPath = config.cwd || rootPath;
        this.logs_path = this.config.logs_path;
        this.subdir = subdir;
        this.color = {error:'\x1b[31m', info:'\x1b[32m', debug:'\x1b[34m', warn:'\x1b[33m'};
        if(this.subdir) this.logs_path = path.join(this.logs_path, this.subdir);
        
        if (!fs.existsSync(this.logs_path)) 
        { 
            try 
            {
                fs.mkdirSync(this.logs_path, { recursive: true });
            } 
            catch (error) 
            {
                let pathList = this.logs_path.split(path.sep).filter(Boolean);
                let curPath = path.sep;
                for(let dir of pathList)
                {
                    curPath = path.join(curPath, dir);
                    if (!fs.existsSync(curPath)) fs.mkdirSync(curPath);
                }
            }            
        }
        
        this.uniqid = '';     
        const handler = 
        {
            get: function (obj, prop) 
            {
                if(typeof obj[prop] !== "function" && typeof obj[prop] == "undefined")
                {
                    return function (...args) 
                    {
                        obj.middleware(prop);
                        obj[prop].apply(obj, args);
                    };
                }
                else return obj[prop];
            },
        };
        
        return new Proxy(this, handler);   
    }

    get date()
    {
        return this.getCurrentISODate().split('T')[0];
    }

    middleware(prop) 
    {
        this[prop] = (msg) => 
        {
            let func = this.getFunc(msg);
            let file = `${this.logs_path}/${prop}-${this.date}.log`
            let level = "info";

            if(prop.toLowerCase().indexOf('err') >=0 || prop.toLowerCase().indexOf('error') >= 0) level = 'error';
            else if(prop.toLowerCase().indexOf('debug') >= 0) level = 'debug';
            let content = `PID: ${this.PID} | ${this.getCurrentISODate()} | ${func} | ${this.uniqid ? this.uniqid+' :':''} ${msg}`

            if(level == 'debug') console.log(this.color[level], prop ,'\x1b[0m', content);
            else this.createMessage(file, `${level}:${prop}`, content);
        }
    }

    getCurrentISODate()
    {
        let date = new Date();
        let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
        return isoDateTime;
    }

    getFunc(msg)
    {
        let stackFilter = (f) => 
        {
            let check = f.indexOf(rootPath) >= 0 && f.indexOf(__filename.replace(rootPath, '')) == -1 && f.indexOf('Error') == -1;
            return check
        }

        let error = msg;
        if(Object.prototype.toString.call(msg) !== '[object Error]') error = new Error();
        
        let stack = error.stack.toString().split('at ').filter(f => stackFilter(f));
        if(!stack.length)
        {
            stack =  new Error(error.message).stack.toString().split('at ').filter(f => stackFilter(f));
        }
        
        let line = stack[0].replace(/\n/, ' ').trim().replace(')', '');       
        let [name, path] = line.split(' (');
        if(name) name = name.replace(rootPath, '');
        if(path) path = path.replace(rootPath, '');
        let [className, method] = name.split('.');
        let newNameParts = [];
        if(className !== 'Object') {
            newNameParts.push(className);
        }
        if(!!method && !['<anonymous>', '.'].includes(method)) {
            newNameParts.push(method);
        }
        
        let newName = newNameParts.join('.');
        if(newName !=='') newName = ` (${newName})`;
        
        if(!path)  path = name;
        path = path.replace(rootPath, '');        
        if(newName.indexOf(rootPath) >= 0)newName = newName.replace(rootPath, '');
        if(newName.indexOf(path) >= 0) newName = newName.replace(path, '').trim();
        if(newName == '()') newName = '';
        
        return `${path}${newName}`;
    }

    log(msg)
    {
        let func = this.getFunc(msg);
        let file = `${this.logs_path}/info-${this.date}.log`
        let level = "info";
        let content = `PID: ${this.PID} | ${this.getCurrentISODate()} | ${func} | ${this.uniqid ? this.uniqid+' :':''} ${msg}`;        
        this.createMessage(file, level, content);
        
    }

    error(msg)
    {
        let func = this.getFunc(msg);
        let file = `${this.logs_path}/error-${this.date}.log`
        let level = "error";
        let content = `PID: ${this.PID} | ${this.getCurrentISODate()} | ${func} | ${this.uniqid ? this.uniqid+' :':''} ${msg}`        
        this.createMessage(file, level, content);
    }

    debug(msg)
    {
        let func = this.getFunc(msg);
        let file = `${this.logs_path}/debug-${this.date}.log`
        let level = "debug";
        let content = `PID: ${this.PID} | ${this.getCurrentISODate()} | ${func} | ${this.uniqid ? this.uniqid+' :':''} ${msg}`        
        console.log(this.color[level], level ,'\x1b[0m', content);
    }

    amqp(msg)
    {
        let func = this.getFunc(msg);
        let file = `${this.logs_path}/amqp-${this.date}.log`
        let level = "info:amqp";
        let content = `PID: ${this.PID} | ${this.getCurrentISODate()} | ${func} | ${this.uniqid ? this.uniqid+' :':''} ${msg}`;
        this.createMessage(file, level, content);
    }

    createMessage(file, label, content)
    {
        try 
        {
            let [level, prefix] = label.split(':');
            fs.appendFileSync(file, `${level}: ${content}\n`);
            if(this.config.console) console.log(this.color[level], prefix || level ,'\x1b[0m', content);
        } 
        catch (error) 
        {
            throw error;
        }
    }
}