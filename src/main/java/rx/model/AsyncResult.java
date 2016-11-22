package rx.model;

import lombok.Data;

/**
 * Created by imcts on 2016. 11. 13..
 */

@Data
public class AsyncResult<T> {
    private T result;

    public AsyncResult(T r) {
        this.result = r;
    }

    public static <T> AsyncResult<T> done(T result) {
        return new AsyncResult<T>(result);
    }
}