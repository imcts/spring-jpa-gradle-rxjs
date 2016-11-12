package rx.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rx.mapper.TodoMapper;
import rx.mapper.Todos;

import java.util.List;

/**
 * Created by imcts on 2016. 11. 12..
 */

@Service
public class HomeService {

    @Autowired
    private TodoMapper mapper;

    public List<Todos> getTodos() {

        List<Todos> list = this.mapper.findAll();

        return list;
    }
}
