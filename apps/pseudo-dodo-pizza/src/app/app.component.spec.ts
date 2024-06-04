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
import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

// #endregion

// MARK: -Testee
import { AppComponent } from './app.component'

// #region -Test Suite

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, AppComponent]
		}).compileComponents()
	})

	xit('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1')?.textContent).toContain(
			'Welcome pseudo-dodo-pizza'
		)
	})

	it(`should have as title 'pseudo-dodo-pizza'`, () => {
		const fixture = TestBed.createComponent(AppComponent)
		const component = fixture.componentInstance
		expect(component.title).toEqual('pseudo-dodo-pizza')
	})
})

// #endregion
