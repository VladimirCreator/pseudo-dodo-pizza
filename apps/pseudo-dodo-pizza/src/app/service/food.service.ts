/* pseudo-dodo-pizza просмотр ассортимента какого-либо предприятия.
 * Copyright (C) 2024 Vladimir Leonidovich
 *
 * This program is free software: you can redistribute
 * it and/or modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

// #region -Dependencies

// MARK: Angular
import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// MARK: RxJS
import { of } from 'rxjs'

// #endregion

import type { Offer } from '../offer'

@Injectable(/*prettier-ignore*/ {
  providedIn: "root"
})
export class FoodService {
	// #region Properties

	readonly #http = inject(HttpClient)

	// #endregion

	// #region Getters & Setters

	public get offers$() {
		return of(
			(JSON.parse(process.env['ESB_ASSORTMENT']!) ?? []) as Array<Offer>
		)
		//return this.#http.get("/offers")
	}

	// #endregion
}
