import { IsNumber, Min } from 'class-validator';

export class TransactionDto {
  @IsNumber()
  @Min(0.01)
  readonly amountEUR: number = 0;
}
