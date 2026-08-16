package com.java;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int grade = 10;
        int grade2 = 11;
        int grade3 = 21;
        int grade4 = 22;

        List<Integer> grades = new ArrayList<>();
        grades.add(grade);
        grades.add(grade2);
        grades.add(grade3);
        grades.add(grade4);

        grades.stream().filter(g -> g > 10).forEach(System.out::println);
        

    }
}