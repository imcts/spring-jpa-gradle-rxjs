package rx.model;

import lombok.Data;

/**
 * Created by imcts on 2016. 11. 13..
 */

@Data
public class AsyncResult<T> {
    private T result;

    public static <T> AsyncResult<T> done(T result) {
        AsyncResult<T> asyncResult = new AsyncResult<T>();
        asyncResult.setResult(result);

        return asyncResult;
    }
}