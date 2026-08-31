package com.read.librarycatalog;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class BookService {
    private final LibraryProperties libraryProperties;
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository, LibraryProperties libraryProperties) {
        this.bookRepository = bookRepository;
        this.libraryProperties = libraryProperties;
    }

    public List<Book> returnBooksAboveTreshold(double threshold){
        return bookRepository.getBooks().stream().filter(b -> b.getPrice() > threshold).collect(Collectors.toList());
    }
}
