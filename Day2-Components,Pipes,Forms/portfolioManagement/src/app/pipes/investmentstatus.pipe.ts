import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investmentstatus',
})
export class InvestmentstatusPipe implements PipeTransform {
  transform(stockCurrentPrice: number, stockPurchasePrice: number) {
    return stockCurrentPrice > stockPurchasePrice ? 'PROFIT' : 'LOSS';
  }
  
}
