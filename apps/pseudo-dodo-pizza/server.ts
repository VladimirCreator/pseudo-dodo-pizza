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

// MARK: Node
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// MARK: Express
import express from 'express'

// MARK: Angular
import { APP_BASE_HREF } from '@angular/common'
import { CommonEngine } from '@angular/ssr'
import bootstrap from './src/main.server'

// #endregion

export function app(): express.Express {
	const server = express()
	const serverDistFolder = dirname(fileURLToPath(import.meta.url))
	const browserDistFolder = resolve(serverDistFolder, '../browser')
	const indexHtml = join(serverDistFolder, 'index.server.html')

	const commonEngine = new CommonEngine()

	server.set('view engine', 'html')
	server.set('views', browserDistFolder)

	server.get(
		'*.*',
		express.static(browserDistFolder, {
			maxAge: '1y'
		})
	)

	// All regular routes use the Angular engine
	server.get('*', (request, response, next) => {
		const { protocol, originalUrl, baseUrl, headers } = request

		commonEngine
			.render({
				bootstrap,
				documentFilePath: indexHtml,
				url: `${protocol}://${headers.host}${originalUrl}`,
				publicPath: browserDistFolder,
				providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }]
			})
			.then(response.send)
			.catch(next)
	})

	return server
}

function run(unknown: any) {
	const port = process.env['PORT'] || 4000

	unknown.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`)
	})
}

run(app())
