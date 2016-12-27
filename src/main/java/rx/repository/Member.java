package rx.repository;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by imcts on 2016. 12. 27..
 */

@Entity
@Getter
@Setter
@ToString
public class Member {
    @Id
    @GeneratedValue
    private int id;

    private String name;

//    @OneToMany
//    @JoinColumn(name = "memberId")
//    private Collection<Todos> todos;
}
