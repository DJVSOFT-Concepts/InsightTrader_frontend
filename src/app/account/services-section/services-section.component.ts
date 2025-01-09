import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent  implements OnInit {
  services = [
    {
      title: 'Real-Time Stock Market Data',
      description: 'Access up-to-date stock market prices and track market movements with precision.',
      icon: 'bi bi-bar-chart-line'
    },
    {
      title: 'Technical Analysis Tools',
      description: 'Utilize advanced technical indicators to analyze market trends and make informed decisions.',
      icon: 'bi bi-graph-up-arrow'
    },
    {
      title: 'Sector Performance Insights',
      description: 'Gain insights into the performance of various sectors to identify growth opportunities.',
      icon: 'bi bi-diagram-3'
    },
    {
      title: 'Forex and Cryptocurrency Tracking',
      description: 'Monitor global forex and cryptocurrency markets for your investment strategies.',
      icon: 'bi bi-currency-exchange'
    },
    {
      title: 'Economic Data Integration',
      description: 'Leverage economic data to support long-term financial planning and trading strategies.',
      icon: 'bi bi-bank'
    },
    {
      title: 'Custom Alerts and Notifications',
      description: 'Set up alerts for price changes, earnings announcements, and breaking market news.',
      icon: 'bi bi-bell'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}


