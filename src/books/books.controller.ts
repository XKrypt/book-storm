import { ClassSerializerInterceptor, Controller, Get, SerializeOptions, UseInterceptors } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookResponseDTO } from './dtos/response-book.dto';

@Controller('books')
@UseInterceptors(ClassSerializerInterceptor)
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @SerializeOptions({ type: BookResponseDTO })
  getAllBooks() {
    return this.booksService.findAll();
  }
}
