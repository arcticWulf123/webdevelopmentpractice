package com.read.librarycatalog;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {
    private List<Book> books = new ArrayList<>();

    public BookRepository() {
        books.add(new Book("Clean Code", 1200));
        books.add(new Book("Effective Java", 1500));
        books.add(new Book("Spring in Action", 1800));
        books.add(new Book("Java Concurrency", 900));
        books.add(new Book("Refactoring", 1600));
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

    public void addBook(Book book) {
        books.add(book);
    }

}
