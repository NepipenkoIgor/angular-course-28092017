import { Component, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitcherComponent),
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  public checked: boolean;

  private _onTouchedCallback: (value: boolean) => void;
  private _onChangedCallback: (value: boolean) => void;

  @HostListener('click')
  public toggle(): void {
    this.checked = !this.checked;
    this._onChangedCallback(this.checked);
    this._onTouchedCallback(this.checked);
  }

  public writeValue(checked: boolean): void {
    this.checked = checked;
  }

  public registerOnChange(fn: (value: boolean) => void): void {
    this._onChangedCallback = fn;
  }

  public registerOnTouched(fn: (value: boolean) => void): void {
    this._onTouchedCallback = fn;
  }
}
