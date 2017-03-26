package com.pik01.pharmaciesmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

@Controller
public class Whatever{

    int a;
    int b;

    public String whatMethod(){
        return"sth";
    }

    public void setWhateverValues(int k,int p){
        if(k>p){
            a=p;
        }
        else b=p;
        if(p<k)b=p;
        if(p==k)a=k;
    }
}