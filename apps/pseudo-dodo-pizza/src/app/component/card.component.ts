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
import { Component, inject, Input } from '@angular/core'

import { CurrencyPipe } from '@angular/common'

// MARK: PrimeNG
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card' // A card’s contents container.
import { ImageModule } from 'primeng/image'
import { ToastModule } from 'primeng/toast' // Используется для отображения предупреждения о том, что в этой версии (0.1.0) оплата ассортимента не поддерживается.
import { MessageService } from 'primeng/api' // Используется для отображения предупреждения о том, что в этой версии (0.1.0) оплата ассортимента не поддерживается.

// #endregion

// #region -Vladimir’s Library

import type { Offer } from '../offer'

// #endregion

// MARK: -Public API reference documentation
/**
 * @author Vladimir Leonidovich
 */
@Component(
	/*prettier-ignore*/ {
	standalone: true,
	selector: 'app-card',
	templateUrl: './card.component.html', styleUrl: './card.component.css',
	imports: [
		CurrencyPipe,
		ButtonModule, CardModule, ImageModule,
		ToastModule
	],
	providers: [
		MessageService
	]
}
)
export class CardComponent {
	readonly #toast = inject(MessageService)

	@Input({
		required: true
	})
	public offer!: Offer

	public notify() {
		this.#toast.add({
			severity: 'info',
			summary: 'Неподдерживаемая версия',
			detail: 'Оплата ассортимента не поддерживается в версии 0.1.0.'
		})
	}
}
