import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'red-button',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './red-button.component.html',
    styleUrl: './red-button.component.css'
})


export class RedButtonComponent{
    buttonText = 'Red Button';
}