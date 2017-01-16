package rx.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rx.repository.Member;
import rx.repository.MemberRepository;

/**
 * Created by imcts on 2017. 1. 16..
 */

@Service
public class SecurityService implements UserDetailsService { //이 서비스 하나면 다 될거 같은 기분이니까 이걸로 확인해 보자고 -ㅅ -
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private MemberRepository memberRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException { //find user
        Member member = this.memberRepository.findByName(name);

        if(member == null)
            throw new UsernameNotFoundException("user not found name is " + name);

        return new User(member.getName(), member.getPassword(), AuthorityUtils.createAuthorityList("ROLE_USER"));
    }

    public String findLoggedInUsername() { //로그인 유저 이름 찾기
        Object userDetails = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (userDetails instanceof UserDetails)
            return ((UserDetails) userDetails).getUsername();

        return null;
    }

    public void setAutoLogin(String username, String password) { //로그인 유저 등록하기
        UserDetails userDetails = userDetailsService.loadUserByUsername(username); //get User

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());
        //User Name and Password setting

        this.authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        //인증 매니저에 Token 저장

        if (usernamePasswordAuthenticationToken.isAuthenticated())
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken); //context의 Auth 정보에 Token 저장
    }
}
