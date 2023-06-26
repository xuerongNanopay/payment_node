import winston, {format} from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      // format: format.combine(
      //   format.colorize({
      //     all:true
      //   }),
      //   // format.label({
      //   //   label:'[LOGGER]'
      //   // }),
      //   format.timestamp({
      //     format:"YY-MM-DD HH:MM:SS"
      //   }),
      //   format.printf(
      //     info => ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
      //   )
      // )
    })
  ]
})

export default logger;