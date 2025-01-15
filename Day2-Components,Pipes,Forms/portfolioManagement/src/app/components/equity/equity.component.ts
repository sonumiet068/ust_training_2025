import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { InvestmentstatusPipe } from '../../pipes/investmentstatus.pipe';
import { RecommendationPipePipe } from '../../pipes/recommendation-pipe.pipe';

@Component({
  selector: 'app-equity',
  imports: [NgFor, InvestmentstatusPipe, RecommendationPipePipe],
  templateUrl: './equity.component.html',
  styleUrl: './equity.component.css',
})
export class EquityComponent {
  stockHeaders = [
    'StockId',
    'StockName',
    'Qty',
    'Purchase Price',
    'CurrentPrice',
    'Status',
    'Hold',
  ];
  stockDetails = [
    {
      stockId: 101,
      stockName: 'TCS',
      stockAvailableQty: 300,
      stockPurchasePrice: 1600,
      stockCurrentPrice: 3200,
    },
    {
      stockId: 102,
      stockName: 'Wipro',
      stockAvailableQty: 800,
      stockPurchasePrice: 180,
      stockCurrentPrice: 140,
    },
    {
      stockId: 103,
      stockName: 'S Narayana Memorial Pvt. Ltd',
      stockAvailableQty: 100,
      stockPurchasePrice: 1600,
      stockCurrentPrice: 400,
    },
    {
      stockId: 104,
      stockName: 'Honewell',
      stockAvailableQty: 3200,
      stockPurchasePrice: 1600,
      stockCurrentPrice: 200,
    },
    {
      stockId: 105,
      stockName: 'Infosys',
      stockAvailableQty: 3000,
      stockPurchasePrice: 1600,
      stockCurrentPrice: 500,
    },
    {
      stockId: 106,
      stockName: 'UST',
      stockAvailableQty: 100,
      stockPurchasePrice: 1600,
      stockCurrentPrice: 3200,
    },
    {
      stockId: 107,
      stockName: 'Tech M',
      stockAvailableQty: 900,
      stockPurchasePrice: 1600,
      stockCurrentPrice: 3200,
    },
    {
      stockId: 108,
      stockName: 'Perfios',
      stockAvailableQty: 220,
      stockPurchasePrice: 1600,
      stockCurrentPrice: 3200,
    },
    {
      stockId: 109,
      stockName: 'Fintech',
      stockAvailableQty: 5,
      stockPurchasePrice: 1600,
      stockCurrentPrice: 3200,
    },
    {
      stockId: 110,
      stockName: 'PureSoftware',
      stockAvailableQty: 300,
      stockPurchasePrice: 1600,
      stockCurrentPrice: 3200,
    },
  ];
}
