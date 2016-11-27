package rx.mapper;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by imcts on 2016. 11. 12..
 */

@Entity
@EqualsAndHashCode(of = "id") //equals 문에 id를 사용한다.
public @Data class Todos {
    @Id
    @GeneratedValue
    private int id;

    private String content;
}
