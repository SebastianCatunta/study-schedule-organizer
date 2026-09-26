import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EntityService } from '../services/entity.service';

@Component({
  selector: 'app-entity-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<form [formGroup]="form" (ngSubmit)="submit()"><input formControlName="name" /><button type="submit">Save</button></form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(EntityService);
  readonly form = this.fb.nonNullable.group({ name: ['', [Validators.required, Validators.maxLength(120)]] });
  submit(): void { if (this.form.valid) this.service.create(this.form.getRawValue()).subscribe(); }
}
