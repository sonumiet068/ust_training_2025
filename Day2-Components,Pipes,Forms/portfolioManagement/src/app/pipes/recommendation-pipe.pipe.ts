import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recommendationPipe',
})
export class RecommendationPipePipe implements PipeTransform {
  transform(stockCurrentPrice: number, stockPurchasePrice: number) {
    var profit =
      ((stockCurrentPrice - stockPurchasePrice) / stockPurchasePrice) * 100;
    if (stockCurrentPrice > stockPurchasePrice) {
      if (profit > 30 && profit < 50) {
        return 'HOLD';
      } else if (profit > 50) {
        return 'SELL';
      }
    } else if (stockCurrentPrice < stockPurchasePrice) {
      if (-profit > 50) {
        return 'ADD';
      } else if (-profit < 50 && -profit > 30) {
        return 'HOLD';
      }
    }
    return '';
  }
}
