package com.travel.far_away.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/users/**").permitAll() // Allow access to /users endpoints
                                .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults()) // Enable basic authentication
                .csrf(csrf -> csrf.disable()); // Disable CSRF for simplicity // Disable CSRF for simplicity

        return http.build();
    }
}
