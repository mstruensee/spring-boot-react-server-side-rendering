package software.wecreate.hadouken.application.authentication.adapter

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import software.wecreate.hadouken.application.authentication.handler.AuthenticationExceptionHandler

@Configuration
@EnableWebSecurity
class BetterWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {

	@Autowired
	AuthenticationExceptionHandler authenticationExceptionHandler

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable()
			.exceptionHandling()
			.authenticationEntryPoint(authenticationExceptionHandler)
			.and()
			.authorizeRequests()
			.antMatchers(HttpMethod.POST, '/api/v1/auth/**').permitAll()
			.antMatchers(HttpMethod.GET, '/public/v1/**').permitAll()
			.antMatchers("/login").permitAll()
			.anyRequest().authenticated()
//			.and()
//			.addFilter(new JwtAuthenticationFilter(authenticationManager()))
//			.addFilter(new JwtAuthorizationFilter(authenticationManager()))
//			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	}
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(authDetailsService).passwordEncoder(bCryptPasswordEncoder)
//	}
//
//	@Bean
//	CorsConfigurationSource corsConfigurationSource() {
//		//TODO: Change before production
//		UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource()
//		CorsConfiguration corsConfiguration = new CorsConfiguration()
//		corsConfiguration.allowedOrigins = ["*"]
//		corsConfiguration.allowedMethods = [HttpMethod.GET.name(), HttpMethod.POST.name(), HttpMethod.PUT.name(), HttpMethod.PATCH.name(), HttpMethod.DELETE.name(), HttpMethod.HEAD.name(), HttpMethod.OPTIONS.name()]
//		corsConfiguration.allowedHeaders = ["*"]
//		urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration)
//		return urlBasedCorsConfigurationSource
//	}
}
