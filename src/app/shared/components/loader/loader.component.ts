import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="loader-wrapper" [class.overlay]="overlay()">
      <div class="spinner-ring">
        <div></div><div></div><div></div><div></div>
      </div>
      @if (label()) {
        <p class="loader-label">{{ label() }}</p>
      }
    </div>
  `,
  styles: [`
    .loader-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;

      &.overlay {
        position: fixed;
        inset: 0;
        background: rgba(255, 255, 255, 0.8);
        z-index: 9000;
      }
    }

    .spinner-ring {
      display: inline-block;
      position: relative;
      width: 48px;
      height: 48px;

      div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 38px;
        height: 38px;
        margin: 5px;
        border: 4px solid #1D9E75;
        border-radius: 50%;
        animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #1D9E75 transparent transparent transparent;

        &:nth-child(1) { animation-delay: -0.45s; }
        &:nth-child(2) { animation-delay: -0.3s; }
        &:nth-child(3) { animation-delay: -0.15s; }
      }
    }

    .loader-label {
      margin-top: 0.75rem;
      color: #6b7280;
      font-size: 0.875rem;
    }

    @keyframes ring {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LoaderComponent {
  readonly overlay = input(false);
  readonly label = input('');
}
