import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  // Use subjects for cross component data sharing, do not use subject as output from a component which will be handled by parent component
  activatedEmitter = new Subject<boolean>();
}
