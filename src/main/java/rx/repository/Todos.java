package rx.repository;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;

/**
 * Created by imcts on 2016. 11. 12..
 */

@Entity
@EqualsAndHashCode(of = "id") //equals 문에 id를 사용한다.
@Getter
@Setter
@Accessors(chain = true)
public class Todos {
    @Id
    @GeneratedValue
    private int id;

    private String content;

    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;
}
