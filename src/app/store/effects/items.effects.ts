import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { RobohashService } from 'src/app/api/robohash.service';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Sale Page] Start load items'),
      exhaustMap(() =>
        this.robohashService.getData().pipe(
          map((items) => ({
            type: '[List Items] Loaded items',
            items,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private robohashService: RobohashService
  ) {}
}
