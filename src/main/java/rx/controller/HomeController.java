package rx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import rx.mapper.Todos;
import rx.model.AsyncResult;
import rx.service.HomeService;

import java.util.List;

/**
 * Created by imcts on 2016. 11. 12..
 */

@Controller
public class HomeController {
    @Autowired
    private HomeService service;

    @RequestMapping("/")
    public ModelAndView home() {
        ModelAndView mav = new ModelAndView("home/index");
        mav.addObject("controller", "home");
        return mav;
    }

    @RequestMapping(value = "/todos", produces = "application/json; charset=utf8")
    @ResponseBody
    public AsyncResult<List<Todos>> getTodos() {
        AsyncResult result = AsyncResult.done(this.service.getTodos());
        return result;
    }
}