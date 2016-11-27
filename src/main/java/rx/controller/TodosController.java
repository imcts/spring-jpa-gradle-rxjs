package rx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import rx.mapper.Todos;
import rx.model.AsyncResult;
import rx.service.HomeService;

import java.util.List;

/**
 * Created by imcts on 2016. 11. 12..
 */

@Controller
@RequestMapping("/todos")
@RestController
public class TodosController {
    @Autowired
    private HomeService service;

    @RequestMapping(value = "", produces = "application/json; charset=utf8", method = RequestMethod.GET)
    public AsyncResult<List<Todos>> getTodoList() {
        return AsyncResult.done(this.service.getTodoList());
    }

    @RequestMapping(value = "", produces = "application/json; charset=utf8", method = RequestMethod.POST)
    public AsyncResult<Todos> registerTodo(@RequestBody Todos todo) {
        return AsyncResult.done(this.service.registerTodo(todo));
    }

    @RequestMapping(value = "", produces = "application/json; charset=utf8", method = RequestMethod.PUT)
    public AsyncResult<Todos> updateTodo(@RequestBody Todos todo) {
        return AsyncResult.done(this.service.updateTodo(todo));
    }

    @RequestMapping(value = "", produces = "application/json; charset=utf8", method = RequestMethod.DELETE)
    public AsyncResult<Todos> deleteTodo(@RequestBody Todos todo) {
        return AsyncResult.done(this.service.deleteTodo(todo));
    }
}