package com.pik01.pharmaciesmanager.config;

import org.springframework.boot.autoconfigure.web.ErrorViewResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.ModelAndView;

import java.util.Collections;

@Configuration
public class WebMvcConfig {
    @Bean
    ErrorViewResolver supportPathBasedLocationStrategyWithoutHashes() {
        return (request, status, model) -> {
            if (status == HttpStatus.NOT_FOUND) {
                return new ModelAndView("index.html", Collections.emptyMap(), HttpStatus.OK);
            } else {
                return null;
            }
        };
    }
}
