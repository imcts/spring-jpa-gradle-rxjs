package rx.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

/**
 * Created by imcts on 2016. 11. 12..
 */

@Component
public interface TodosRepository extends JpaRepository<Todos, Integer> {}
