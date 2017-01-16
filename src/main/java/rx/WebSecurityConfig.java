package rx;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/**u
 * Created by imcts on 2017. 1. 16..
 */


//TODO https://hellokoding.com/registration-and-login-example-with-spring-security-spring-boot-spring-data-jpa-hsql-jsp/


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable();

        http
            .authorizeRequests()
                .antMatchers("/resources/**", "/login", "/").permitAll() //resources 는 권한 허용
                .anyRequest().authenticated(); //모든 request는 인증 설정


        http
            .formLogin()
                .loginPage("/form").permitAll();

        http
            .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout/**"))
                .logoutSuccessUrl("/");
    }
}
