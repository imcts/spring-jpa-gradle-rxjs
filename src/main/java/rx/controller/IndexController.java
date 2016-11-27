package rx.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by imcts on 2016. 11. 25..
 */
@Controller
public class IndexController {

    @RequestMapping("/")
    public ModelAndView home() {
        ModelAndView mav = new ModelAndView("home/index");
        mav.addObject("controller", "home");
        return mav;
    }
}
