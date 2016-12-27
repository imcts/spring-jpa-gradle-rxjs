package rx.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rx.repository.MemberRepository;
import rx.repository.Todos;
import rx.repository.TodosRepository;

import java.util.List;

/**
 * Created by imcts on 2016. 11. 12..
 */

@Service
public class HomeService {

    @Autowired
    private TodosRepository todoRepository;

    @Autowired
    private MemberRepository memberRepository;


    private final Integer dolenId = 1;

    public List<Todos> getTodoList() {
        return this.todoRepository.findAll();
    }

    public Todos registerTodo(Todos todo) {
        return this.todoRepository.save(todo.setMember(memberRepository.findOne(dolenId)));
    }

    public Todos updateTodo(Todos todo) {
        return this.todoRepository.save(todo);
    }

    public Todos deleteTodo(Todos todo) {
        this.todoRepository.delete(todo);
        return todo;
    }
}
