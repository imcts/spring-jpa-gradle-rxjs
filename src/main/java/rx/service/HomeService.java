package rx.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rx.mapper.TodosRepository;
import rx.mapper.Todos;

import java.util.List;

/**
 * Created by imcts on 2016. 11. 12..
 */

@Service
public class HomeService {

    @Autowired
    private TodosRepository repository;

    public List<Todos> getTodoList() {
        List<Todos> list = this.repository.findAll();
        return list;
    }

    public Todos registerTodo(Todos todo) {
        return this.repository.save(todo);
    }


    public Todos updateTodo(Todos todo) {
        return this.repository.save(todo);
    }

    public Todos deleteTodo(Todos todo) {
        this.repository.delete(todo);
        return todo;
    }
}
