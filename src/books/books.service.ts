import { Injectable } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import { Pool } from 'pg';
import { BookResponseDTO } from './dtos/response-book.dto';

configDotenv();

@Injectable()
export class BooksService {
  private pool: Pool = new Pool({
    user: process.env.DB_USER || 'usuario',
    password: process.env.DB_PASSWORD || 'senha',
    database: process.env.DB_NAME || 'banco',
    host: process.env.DB_HOST || 'localhost',
    port: Number.parseInt(process.env.DB_PORT || '5432'),
    max: 20,
    idleTimeoutMillis: 30000,
  });

  async findAll(): Promise<any> {
    let books = await this.pool.query('SELECT * FROM books LIMIT 100');

    return books.rows;
  }

  createBook(book: {
    name: string;
    author: string;
    release_date: Date;
    price: number;
  }) {}
}
