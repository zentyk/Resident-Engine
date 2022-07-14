import * as Sentry from "@sentry/node";
import * as Tracing from '@sentry/tracing';

export default class SentryUtils {
    Init(dsn : string) {
        Sentry.init({
            dsn:dsn,
            tracesSampleRate: 1.0,
        });
    }

    SendError(error: Error) {
        /*const transaction = Sentry.startTransaction({
            op: 'test',
            name: "My First Test Transaction",
        });*/

        Sentry.captureException(error);

        //transaction.finish();
    }
}