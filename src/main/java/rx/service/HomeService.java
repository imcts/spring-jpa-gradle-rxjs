package rx.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rx.repository.Member;
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

    @Autowired
    private SecurityService securityService;

    private final Integer dolenId = 1;

    public List<Todos> getTodoList() {
        String name = securityService.findLoggedInUsername();
        Member member = this.memberRepository.findByName(name);
        return this.todoRepository.findByMemberId(member.getId());
    }

    public Todos registerTodo(Todos todo) {
        String name = securityService.findLoggedInUsername();
        Member member = this.memberRepository.findByName(name);
        return this.todoRepository.save(todo.setMember(member));
    }

    public Todos updateTodo(Todos todo) {
        String name = securityService.findLoggedInUsername();
        Member member = this.memberRepository.findByName(name);
        todo.setMember(member);
        return this.todoRepository.save(todo);
    }

    public Todos deleteTodo(Todos todo) {
        this.todoRepository.delete(todo);
        return todo;
    }
}
