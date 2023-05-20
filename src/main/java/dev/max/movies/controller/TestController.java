package dev.max.movies.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestRoute {

    @GetMapping("/testing")
    public String test() {
        return "Hello World";
    }
}
