import { httpProvider } from '../utils/http'

export class PageProvider {
    /**
     * 获取所有页面
     */
    static async getPages(params) {
        return httpProvider.get('/getUserInfo', { params: params })
    }
    
}
