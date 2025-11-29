import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'fa-icon',
  standalone: true,
  template: `
    <span [innerHTML]="svg"></span>
  `,
})
export class FaIconComponent {
  @Input() icon!: IconDefinition;

  get svg() {
    const [w, h, , , d] = this.icon.icon;
    return `
      <svg aria-hidden="true" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <path fill="currentColor" d="${d}"></path>
      </svg>
    `;
  }
}

