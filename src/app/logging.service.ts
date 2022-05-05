export class LoggingService {
  logStatusChanged(status : string) {
    console.log("Server status changed to: " + status);
  }
}
