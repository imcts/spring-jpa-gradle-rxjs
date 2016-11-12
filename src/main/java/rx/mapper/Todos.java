package rx.mapper;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by imcts on 2016. 11. 12..
 */

@Entity
public @Data class Todos {
    @Id
    @GeneratedValue
    private int id;

    private String content;
}
