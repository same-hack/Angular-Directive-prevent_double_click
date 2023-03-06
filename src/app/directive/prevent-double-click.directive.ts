import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventDoubleClick]',
})
export class PreventDoubleClickDirective {
  /**disabledを解除するまでの時間※ミリ秒 */
  TIMER: number = 3000;

  // DI(依存性の注入)
  // DOMへのアクセスが可能となる
  constructor(private element: ElementRef) {}

  // クリックイベントを受け取り処理を実行
  @HostListener('click') public onClick() {
    console.log('要素をdisabledにします');
    // 受け取ったHTML要素のdisabled属性をtrueにして、非活性にする
    this.element.nativeElement.disabled = true;

    // 指定した時間が経過したら処理を実行
    setTimeout(() => {
      // disabled属性をfalseにして活性状態に戻す
      this.element.nativeElement.disabled = false;
    }, this.TIMER);
  }
}
