import { TestBed } from '@angular/core/testing';
import { RedButtonComponent } from './red-button.component';

describe('RedButtonComponent', () =>{
    it('should read Red Button on the button',() =>{
        const fixture = TestBed.createComponent(RedButtonComponent);
        const button = fixture.componentInstance;
        expect(button.buttonText).toEqual('Red Button');
    });
});
