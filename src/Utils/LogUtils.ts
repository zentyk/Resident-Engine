export default class LogUtils {

    Log(message: string) {
        console.log(message);
    }

    Debug(message: string) {
        console.debug(message);
    }

    Warn(message: string) {
        console.warn(message);
    }

    Error(message: string) {
        console.error(message);
    }
}