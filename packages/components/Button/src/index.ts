import Button from "./index.vue"
import type { App } from "vue"

// 全量引入
export default {
	install(app: App) {
		app.component("mc-Button", Button)
	}
}

// 按需引入
export { Button }