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
import { Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router'

// MARK: PrimeNG
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { MenubarModule } from 'primeng/menubar'

// #endregion

// #region -Vladimir’s Library

import { FoodService } from './service/food.service'
import { CardComponent } from './component/card.component'

// #endregion

// MARK: -Public API reference documentation
/**
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 */
@Component(
	/*prettier-ignore*/ {
	standalone: true,
	selector: 'app-root',
	templateUrl: './app.component.html', styleUrl: './app.component.css',
	imports: [
		AsyncPipe,
		RouterModule, RouterLink, RouterLinkActive,
		ButtonModule, DialogModule, MenubarModule,
		CardComponent
	]
}
)
export class AppComponent {
	// #region Properties

	readonly #food = inject(FoodService)

	public readonly title = 'pseudo-dodo-pizza'
	public readonly categories = [
		{
			label: 'Sponsor',
			url: 'https://www.donationalerts.com/r/vladimirleonidovich/',
			target: '_blank',
			icon: 'pi pi-heart'
		},
		{
			label: 'GitHub',
			url: 'https://github.com/VladimirCreator/pseudo-dodo-pizza/',
			target: '_blank',
			icon: 'pi pi-github'
		}
	]

	public isCartRevealed = false

	// #endregion

	// #region Getters & Setters

	public get assortment$() {
		return this.#food.offers$
	}

	// #endregion

	// #region Methods

	public reveal() {
		this.isCartRevealed = !this.isCartRevealed
	}

	// #endregion
}
