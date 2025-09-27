import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives-page',
  imports: [],
  templateUrl: './structural-directives-page.component.html',
})
export class StructuralDirectivesPageComponent { 

  isVisible = signal(true);

  toggleVisibility() {
    this.isVisible.update(v => !v);
  }

  // conditional SWITCH
  viewMode = signal<'none' | 'list' | 'grid'>('none');
  
  setViewMode(mode: 'none' | 'list' | 'grid') {
    this.viewMode.set(mode);
  }

  //Cycle - For Loop
  users = signal([
    {id: 1, name: 'Alice', role: 'admin'},
    {id: 2, name: 'Bob', role: 'user'},
    {id: 3, name: 'Charlie', role: 'user'},
  ]);
}
