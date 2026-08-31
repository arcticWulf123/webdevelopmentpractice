package com.read.librarycatalog;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LibrarycatalogApplication {

	private final LibraryProperties libraryProperties;

    LibrarycatalogApplication(LibraryProperties libraryProperties) {
        this.libraryProperties = libraryProperties;
    }

    public static void main(String[] args) {
		SpringApplication.run(LibrarycatalogApplication.class, args);
	}

	@Bean
	public CommandLineRunner startupReport(BookService bookService) {
		return args -> {
			System.out.println("""
					LIBRARY REPORT
					""");
			System.out.printf("""
					Library: %s
					Currency: %s

					Books above PHP 1300:
					""", libraryProperties.getName(), libraryProperties.getCurrency());
			List<Book> books = bookService.returnBooksAboveTreshold(1300);
			for (Book book : books) {
				System.out.println(book.getTitle() + " " + book.getPrice());
			}

		};
	}
}
