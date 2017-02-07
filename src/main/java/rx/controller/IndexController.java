package rx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import rx.service.SecurityService;

/**
 * Created by imcts on 2016. 11. 25..
 */
@Controller
public class IndexController {
    @Autowired
    private SecurityService securityService;

    @RequestMapping("/")
    public ModelAndView index() {
        ModelAndView mav = new ModelAndView("index");
        return mav;
    }

    @RequestMapping("/home")
    public ModelAndView home() {
        ModelAndView mav = new ModelAndView("home/index");
        mav.addObject("controller", "home");
        return mav;
    }

    @RequestMapping("/form")
    public ModelAndView loginForm() {
        ModelAndView mav = new ModelAndView("auth/form");
        return mav;
    }

    @RequestMapping(value = "/login", method = { RequestMethod.GET, RequestMethod.POST })
    public String login(@RequestParam String name, @RequestParam String password) {
        //do auto login
        try {

            this.securityService.setAutoLogin(name, password);

        } catch (Exception e) {

            System.out.println("login fail!!!");

        }

        return "redirect:/home";
    }

    @RequestMapping("/video")
    public ModelAndView video() {
        ModelAndView mav = new ModelAndView("/video");
        return mav;
    }
}
