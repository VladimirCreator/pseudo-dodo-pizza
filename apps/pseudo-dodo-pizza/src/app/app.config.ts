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
import { ApplicationConfig } from '@angular/core'
import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideRouter } from '@angular/router'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'

// #endregion

import { routes } from './app.routes'

// MARK: -Configuration
export const configuration: ApplicationConfig = {
	providers:
		/*prettier-ignore*/ [
		provideHttpClient(withFetch()),
		provideRouter(routes),
		provideClientHydration(),
		provideAnimations()
	]
}
