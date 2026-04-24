import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'aedCurrency', standalone: true })
export class AedCurrencyPipe implements PipeTransform {
  transform(value: number | null | undefined, showDecimals = false): string {
    if (value == null) return 'AED 0';
    const formatted = value.toLocaleString('en-US', {
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0,
    });
    return `AED ${formatted}`;
  }
}
