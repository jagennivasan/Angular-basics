import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FormsModule } from '@angular/forms';
// import { HelloWorldComponent } from './hello-world/hello-world.component';
// import { FormComponent } from './form/form.component';
// import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LifeCycleComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

}
